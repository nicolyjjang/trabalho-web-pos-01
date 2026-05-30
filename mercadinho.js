import express from "express";
import produtosRoutes from "./routes/routes_produtos.js";
import rotasVenda from "./routes/routes_venda.js";
import rotaPessoa from "./routes/routes_pessoa.js";
import rotaCampanha from "./routes/campanha.js";
import cors from "cors";
import connectToDatabase from "./config/dbConnect.js";
import mongoose from "mongoose";

const app = express();
const port = 8000;

app.use(express.json());

app.use("/pessoa", rotaPessoa);
app.use("/campanha", rotaCampanha);
app.use("/produtos", produtosRoutes);
app.use("/venda", rotasVenda);

app.use("/", (req, res) => {
  res.send("Bem-vindo ao Mercadinho São Miguel!");
});

app.listen(port, () => {
  console.log(`Mercadinho Sâo Miguel escutando em http://localhost:${port}`);
});
