import {
  lerVendas,
  pegarVendaPorId,
  adicionarVenda,
  atualizarVenda,
  deletarVenda,
} from "../services/services_venda.js";

async function obterVendas(req, res) {
  try {
    const vendas = await lerVendas();
    res.send(vendas);
  } catch (error) {
    res.status(500).send({ error: "Erro ao obter vendas" });
  }
}

async function obterVendaPorId(req, res) {
  try {
    const id = req.params.id;
    if (id && !isNaN(Number(id))) {
      const venda = await pegarVendaPorId(id);
      if (venda) {
        res.send(venda);
      } else {
        res.status(404).send({ error: "Venda não encontrada" });
      }
    } else {
      res.status(400).send({ error: "ID não encontrado" });
    }
  } catch (error) {
    res.status(500).send({ error: "Erro ao obter venda" });
  }
}

async function criarNovaVenda(req, res) {
  try {
    const novaVenda = req.body;
    if (novaVenda) {
      await adicionarVenda(novaVenda);
      res.status(201).send({ message: "Venda criada com sucesso" });
    } else {
      res.status(400).send({ error: "Dados da venda não encontrados" });
    }
  } catch (error) {
    res.status(500).send({ error: "Erro ao criar venda" });
  }
}

async function atualizarVendaPorId(req, res) {
  try {
    const id = req.params.id;
    if (id && !isNaN(Number(id))) {
      const vendaAtualizada = req.body;
      await atualizarVenda(id, vendaAtualizada);
      res.send({ message: "Venda atualizada com sucesso" });
    } else {
      res.status(400).send({ error: "ID não encontrado" });
    }
  } catch (error) {
    res.status(500).send({ error: "Erro ao atualizar venda" });
  }
}

async function deletarVendaPorId(req, res) {
  try {
    const id = req.params.id;
    if (id && !isNaN(Number(id))) {
      await deletarVenda(id);
      res.send({ message: "Venda deletada com sucesso" });
    } else {
      res.status(400).send({ error: "ID não encontrado" });
    }
  } catch (error) {
    res.status(500).send({ error: "Erro ao deletar venda" });
  }
}

export {
  obterVendas,
  obterVendaPorId,
  criarNovaVenda,
  atualizarVendaPorId,
  deletarVendaPorId,
};
