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

try {
  await connectToDatabase();
  app.use(express.json());
  app.use("/produtos", produtosRoutes);
  app.use("/vendas", rotasVenda);
  app.use("/pessoa", rotaPessoa);
  app.use("/campanha", rotaCampanha);
  mongoose.connection.on("error", (error) => {
    console.error("Erro na conexão com o banco de dados:", error);
  });
  mongoose.connection.once("open", () => {
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
  });
  app.listen(port, () => {
    console.log(`Mercadinho São Miguel escutando em http://localhost:${port}`);
  });
} catch (error) {
  console.error("Erro ao conectar ao abnco de dados", error);
}
app.use("/", (req, res) => {
  res.send("Bem-vindo ao Mercadinho São Miguel!");
});
