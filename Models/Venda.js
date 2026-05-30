import mongoose from "mongoose";

import pessoaSchema from "./Pessoa.js";
import produtoSchema from "./Produto.js";

const vendaSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  data_venda: { type: Date, required: true },
  valor_total: { type: Number },
  pontos_ganhos_total: { type: Number },
  id_cliente: pessoaSchema,
  id_funcionario: pessoaSchema,
  itens: [
    produtoSchema
  ],
  pagamentos: [
    {
      tipo: {type: String, required: true},
      valor: {type: Number, required: true},
      data: {type: Date, required: true}
    }
    ],
});

const Venda = mongoose.model("Venda", vendaSchema);

export { Venda };