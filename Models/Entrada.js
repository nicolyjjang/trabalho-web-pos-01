import mongoose from "mongoose";

const entradaSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        data_entrada: { type: Date, required: true },
        valor_total: { type: Number },
        id_fornecedor: { },
        itens: [
            {}
        ]
    }
);

const Entrada = mongoose.model("Entrada", entradaSchema);

export { Entrada };