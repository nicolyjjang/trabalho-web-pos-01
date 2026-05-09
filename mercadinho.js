const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());

const rotaPessoa = require("./routes/routes_pessoa");
const rotaCampanha = require("./routes/campanha");

app.use("/pessoa", rotaPessoa);
app.use("/campanha", rotaCampanha);

app.use("/", (req, res) => {
  res.send("Bem-vindo ao Mercadinho São Miguel!");
});

app.listen(port, () => {
  console.log(`Mercadinho Sâo Miguel escutando em http://localhost:${port}`);
});