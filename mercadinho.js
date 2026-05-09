const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());

const rotasVenda = require('./routes/routes_venda');
app.use('/vendas', rotasVenda);

const rotasEntrada = require('./routes/routes_entrada');
app.use('/entradas', rotasEntrada);

app.use("/", (req, res) => {
  res.send("Bem-vindo ao Mercadinho São Miguel!");
});

app.listen(port, () => {
  console.log(`Mercadinho Sâo Miguel escutando em http://localhost:${port}`);
});
