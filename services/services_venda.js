import { Venda } from "../Models/Venda.js";

async function lerVendas() {
    const vendas = await Venda.find();
    return vendas;
}

async function pegarVendaPorId(id) {
    const vendas = await Venda.findById(id);
    if (!vendas) {
        throw new Error("Venda não encontrada.");
    }
    return vendas;
}

async function adicionarVenda(novaVenda) {
    const vendas = new Venda(novaVenda);
    const vendaSalva = await vendas.save();
    return vendaSalva;
}

async function atualizarVenda(id, vendaAtualizada) {
    const venda = await Venda.findByIdAndUpdate(id, vendaAtualizada, {
        new: true, 
        runValidators: true,
    });
    if (!venda) {
        throw new Error("Venda não encontrada.")
    }
    return venda;
    
}

async function deletarVenda(id) {
    const venda = await Venda.findByIdAndDelete(id);
    if (!venda) {
        throw new Error("Venda não encontrada.");
    }
}

export {
  lerVendas,
  pegarVendaPorId,
  adicionarVenda,
  atualizarVenda,
  deletarVenda,
};
