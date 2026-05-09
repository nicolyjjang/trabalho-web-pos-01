const {
  lerVendas,
  pegarVendaPorId,
  adicionarVenda,
  atualizarVenda,
  deletarVenda,
} = require("../services/services_venda");

async function obterVendas(req, res) {
  try {
    const vendas = await lerVendas();
    res.json(vendas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter vendas" });
  }
}

async function obterVendaPorId(req, res) {
  try {
    const id = req.params.id;
    if (id && !isNaN(Number(id))) {
      const venda = await pegarVendaPorId(id);
      if (venda) {
        res.json(venda);
      } else {
        res.status(404).json({ error: "Venda não encontrada" });
      }
    } else {
      res.status(400).json({ error: "ID não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter venda" });
  }
}

async function criarNovaVenda(req, res) {
  try {
    const novaVenda = req.body;
    if (novaVenda) {
      await adicionarVenda(novaVenda);
      res.status(201).json({ message: "Venda criada com sucesso" });
    } else {
      res.status(400).json({ error: "Dados da venda não encontrados" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar venda" });
  }
}

async function atualizarVendaPorId(req, res) {
  try {
    const id = req.params.id;
    if (id && !isNaN(Number(id))) {
      const vendaAtualizada = req.body;
      await atualizarVenda(id, vendaAtualizada);
      res.json({ message: "Venda atualizada com sucesso" });
    } else {
      res.status(400).json({ error: "ID não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar venda" });
  }
}

async function deletarVendaPorId(req, res) {
  try {
    const id = req.params.id;
    if (id && !isNaN(Number(id))) {
      await deletarVenda(id);
      res.json({ message: "Venda deletada com sucesso" });
    } else {
      res.status(400).json({ error: "ID não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar venda" });
  }
}

module.exports = {
  obterVendas,
  obterVendaPorId,
  criarNovaVenda,
  atualizarVendaPorId,
  deletarVendaPorId,
};
