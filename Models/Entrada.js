import mongoose from "mongoose";

import { pessoaSchema } from "./Pessoa.js";
import { produtoSchema } from "./Produto.js";

const entradaSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        data_entrada: { type: Date, required: true },
        valor_total: { type: Number },
        id_fornecedor: pessoaSchema,
        itens: [
            produtoSchema
        ]
    }
);

const Entrada = mongoose.model("Entrada", entradaSchema);

export { Entrada };