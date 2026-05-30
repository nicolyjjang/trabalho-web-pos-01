import fs from "fs";

const caminhoArquivo = "./assets/resgates.json";

async function getAllResgates() {
  return JSON.parse(await fs.promises.readFile(caminhoArquivo, "utf-8"));
}

async function getResgate(id) {
  const resgates = await getAllResgates();
  const resgate = resgates.find((resgate) => resgate.id === Number(id));
  return resgate;
}

async function createResgate(dados) {
  const resgates = await getAllResgates();
  const newResgate = [...resgates, dados];
  fs.writeFileSync(caminhoArquivo, JSON.stringify(newResgate, null, 2));
  return newResgate;
}

async function updateResgate(id, modificacoes) {
  const resgates = await getAllResgates();
  const resgateIndex = resgates.findIndex(
    (resgate) => resgate.id === Number(id),
  );
  if (resgateIndex === -1) {
    throw new Error("Resgate não encontrado");
  }
  const updatedResgate = { ...resgates[resgateIndex], ...modificacoes };
  resgates[resgateIndex] = updatedResgate;
  fs.writeFileSync(caminhoArquivo, JSON.stringify(resgates, null, 2));
  return updatedResgate;
}

async function deleteResgate(id) {
  const resgates = await getAllResgates();
  const resgateIndex = resgates.findIndex(
    (resgate) => resgate.id === Number(id),
  );
  if (resgateIndex === -1) {
    throw new Error("Resgate não encontrado");
  }
  resgates.splice(resgateIndex, 1);
  fs.writeFileSync(caminhoArquivo, JSON.stringify(resgates, null, 2));
  return resgates;
}

export {
  getAllResgates,
  getResgate,
  createResgate,
  updateResgate,
  deleteResgate,
};
