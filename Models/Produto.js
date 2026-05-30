import mongoose from "mongoose";
import { campanhaSchema } from "./Campanha.js";

const produtoSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
    },
    preco_venda: {
      type: Number,
      required: true,
    },
    preco_custo: {
      type: Number,
      required: true,
    },
    codigo_barras: {
      type: String,
      unique: true,
      required: true,
    },
    qtd_atual: {
      type: Number,
      default: 0,
    },
    qtd_minima: {
      type: Number,
      default: 10,
    },
    campanhas_ativas: [campanhaSchema],
  },
  { timestamps: true },
);

const Produto = mongoose.model("Produto", produtoSchema);

export { Produto };
