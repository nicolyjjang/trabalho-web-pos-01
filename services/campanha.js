import fs from "fs";

function getTodasCampanhas() {
  return JSON.parse(fs.readFileSync("campanha.json"));
}

function getCampanhaPorId(id) {
  const campanhas = JSON.parse(fs.readFileSync("campanha.json"));
  const campanhaFiltrado = livros.filter((campanha) => campanha.id === id)[0];
  return campanhaFiltrado;
}

function insereCampanha(campanhaNovo) {
  const campanhas = JSON.parse(fs.readFileSync("campanha.json"));
  const novaListaDeCampanha = [...campanhas, campanhaNovo];
}

function modificaCampanha(modificacoes, id) {
  let campanhasAtuais = JSON.parse(fs.readFileSync("campanha.json"));
  const indiciModificado = campanhasAtuais.findIndex(
    (campanha) => campanha.id === id,
  );
  const conteudoMudado = {
    ...campanhasAtuais[indiciModificado],
    ...modificacoes,
  };
  campanhasAtuais[indiciModificado] = conteudoMudado;
  fs.writeFileSync("campanha.json", JSON.stringify(campanhasAtuais));
}

function deletarCampanhaPorId(id) {
  const campanhas = JSON.parse(fs.readFileSync("campanha.json"));
  const campanhaFiltrado = campanhas.filter((campanha) => campanha.id !== id);
  fs.writeFileSync("campanha.json", JSON.stringify(campanhaFiltrado));
}

export {
  getTodasCampanhas,
  getCampanhaPorId,
  insereCampanha,
  modificaCampanha,
  deletarCampanhaPorId,
};
