const {
    getAllResgates,
    getResgate,
    createResgate,
    updateResgate,
    deleteResgate
} = require('../services/services_resgates');

async function getAllResgatesController(req, res) {
    try {
        const resgates = await getAllResgates();
        res.json(resgates);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getResgateController(req, res) {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            const resgate = await getResgate(id);
            if (!resgate) {
                return res.status(404).json('Resgate não encontrado');
            }
            res.json(resgate);
        } else {
            res.status(422).json('ID inválido');
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}

async function createResgateController(req, res) {
    try {
        const dados = req.body;
        if (req.body.id_cliente && req.body.itens_resgatados) {
            await createResgate(dados);
            res.status(201).json('Resgate criado com sucesso');
        } else {
            res.status(422).json('Campos "id_cliente" e "itens_resgatados" são obrigatórios');
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}

async function updateResgateController(req, res) {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            const body = req.body;
            await updateResgate(id, body);
            res.json('Resgate atualizado com sucesso');
        } else {
            res.status(422).json('ID inválido');
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}

async function deleteResgateController(req, res) {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            await deleteResgate(id);
            res.json('Resgate excluído com sucesso');
        } else {
            res.status(422).json('ID inválido');
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = {
    getAllResgatesController,
    getResgateController,
    createResgateController,
    updateResgateController,
    deleteResgateController
};