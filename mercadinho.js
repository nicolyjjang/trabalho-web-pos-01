const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());

const produtosRoutes = require("./routes/routes_produtos");
app.use("/produtos", produtosRoutes);

const rotasVenda = require('./routes/routes_venda');
app.use('/vendas', rotasVenda);

const rotaPessoa = require("./routes/routes_pessoa");
app.use("/pessoa", rotaPessoa);

const rotaCampanha = require("./routes/campanha");
app.use("/campanha", rotaCampanha);

const rotasEntrada = require('./routes/routes_entrada');
app.use('/entradas', rotasEntrada);

app.use("/", (req, res) => {
  res.send("Bem-vindo ao Mercadinho São Miguel!");
});

app.listen(port, () => {
  console.log(`Mercadinho São Miguel escutando em http://localhost:${port}`);
});
