const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());

const produtosRoutes = require("./routes/routes_produtos");
app.use("/produtos", produtosRoutes);

app.use("/", (req, res) => {
  res.send("Bem-vindo ao Mercadinho São Miguel!");
});

app.listen(port, () => {
  console.log(`Mercadinho São Miguel escutando em http://localhost:${port}`);
});
