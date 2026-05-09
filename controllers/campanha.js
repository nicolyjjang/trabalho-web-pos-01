const { getTodasCampanhas, getCampanhaPorId, insereCampanha, modificaCampanha, deletarCampanhaPorId } = require("../services/campanha")

function getCampanhas(req, res){
    try {
        const campanhas = getTodasCampanhas();
        res.send(campanhas);
    } catch (error) {
        res.status(500);
        res.send(error.message)    
    };
};

function getCampanha(req, res){ //get:id
    try {
        const id = req.params.id
        
        if (id && Number(id)) {
            const campanhas = getCampanhaPorId(id)
            res.send(campanhas);
            
        } else {
            res.status(422);
            res.send("id invalido")                
        }

    } catch (error) {
        res.status(500);
        res.send(error.message)    
    };
};

function postCampanha(req, res){
    try {
        const campanhaNovo = req.body 

        if (req.body.nome) {
            insereCampanha(campanhaNovo)
            res.status(201);
            res.send("campanha inserido com sucesso");
            
        } else {
            res.status(422);
            res.send("campo nome obrigadorio")                
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
function patchCampanha(req, res){
    try {
        const id = req.params.id

        if (id && Number(id)) {

            const body = req.body
            modificaCampanha(body, id)
            res.send("item stualizado com sucesso");
        } else {
            res.status(422);
            res.send("id invalido")                
        }
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
function deleteCampanha(req, res){
    try {
        const id = req.params.id
    
        if (id && Number(id)) {

            deletarCampanhaPorId(id)
            res.send("Campanha deletado com sucesso");
            
        } else {
            res.status(422);
            res.send("id invalido")                
        }


    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getCampanhas,
    getCampanha,
    postCampanha,
    patchCampanha,
    deleteCampanha
}