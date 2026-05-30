import mongoose from "mongoose";

const vendaSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  data_venda: { type: Date, required: true },
  valor_total: { type: Number },
  pontos_ganhos_total: { type: Number },
  id_cliente: {},
  id_funcionario: {},
  itens: [
    {
      
    }
  ],
  pagamentos: [
    {

    }
    ],
});

const Venda = mongoose.model("Venda", vendaSchema);

export { Venda };