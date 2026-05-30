import { Campanha } from "../Models/Campanha.js";

async function getTodasCampanhas() {
  const campanhas = await Campanha.find();
  return campanhas;
}

async function getCampanhaPorId(id) {
  const campanha = await Campanha.findById(id);

  if (!campanha){
    throw new Error("Campanha não encontrada");
    
  }
  return campanha;
}
function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function getCampanhaPorDescricao(descricao) {
  const regex = new RegExp(escapeRegExp(descricao), "i");
  const campanhas = await Campanha.find({ descricao: regex });
  if (!campanhas.length) {
    throw new Error("Campanha não encontrada");
  }
  return campanhas;
}


async function insereCampanha(campanhaNovo) {
  const novaCampanhas = new Campanha(campanhaNovo);
  const salvarCampanha = await novaCampanhas.save();
  return salvarCampanha;
}

async function modificaCampanha(id, modificacoes) {
  const campanhasAtuais = await Campanha.findByIdAndUpdate(id, modificacoes, {
    new: true,
    runValidators: true,
  });
  if(!campanhasAtuais){
    throw new Error("Campanha não encontrada para modificaão");
  }
  return campanhasAtuais;
}

async function deletarCampanhaPorId(id) {
  const campanhas = await Campanha.findByIdAndDelete(id);

  if(!campanhas){
    throw new Error("Campanha não encontrada para deletar");
  }
  return campanhas;
}

export {
  getTodasCampanhas,
  getCampanhaPorId,
  insereCampanha,
  modificaCampanha,
  deletarCampanhaPorId,
};
