const {
  lerEntradas,
  pegarEntradaPorId,
  adicionarEntrada,
  atualizarEntrada,
  deletarEntrada,
} = require("../services/services_entrada");

async function obterEntradas(req, res) {
  try {
    const entradas = await lerEntradas();
    res.json(entradas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter entradas" });
  }
}

async function obterEntradaPorId(req, res) {
  try {
    const id = req.params.id;
    if (id && !isNaN(Number(id))) {
      const entrada = await pegarEntradaPorId(id);
      if (entrada) {
        res.json(entrada);
      } else {
        res.status(404).json({ error: "Entrada não encontrada" });
      }
    } else {
      res.status(400).json({ error: "ID não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter entrada" });
  }
}

async function criarNovaEntrada(req, res) {
  try {
    const novaEntrada = req.body;
    if (novaEntrada) {
      await adicionarEntrada(novaEntrada);
      res.status(201).json({ message: "Entrada criada com sucesso" });
    } else {
      res.status(400).json({ error: "Dados da entrada não encontrados" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar entrada" });
  }
}

async function atualizarEntradaPorId(req, res) {
  try {
    const id = req.params.id;
    if (id && !isNaN(Number(id))) {
      const entradaAtualizada = req.body;
      await atualizarEntrada(id, entradaAtualizada);
      res.json({ message: "Entrada atualizada com sucesso" });
    } else {
      res.status(400).json({ error: "ID não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar entrada" });
  }
}

async function deletarEntradaPorId(req, res) {
  try {
    const id = req.params.id;
    if (id && !isNaN(Number(id))) {
      await deletarEntrada(id);
      res.json({ message: "Entrada deletada com sucesso" });
    } else {
      res.status(400).json({ error: "ID não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar entrada" });
  }
}

module.exports = {
  obterEntradas,
  obterEntradaPorId,
  criarNovaEntrada,
  atualizarEntradaPorId,
  deletarEntradaPorId,
};
