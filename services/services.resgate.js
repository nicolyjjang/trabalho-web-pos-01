import {Resgate} from "../Models/Resgaste.js";

async function getAllResgates() {
  const resgates = await Resgate.find();
  return resgates;
}

async function getResgate(id) {
  const resgates = await Resgate.findById(id);
    if (!resgates){
        throw new Error("Resgate não encontrado")
    }
  return resgate;
}

async function createResgate(dados) {
  const newResgate = new Resgate(dados);
  const savedResgate = await newResgate.save();
  return savedResgate;
}

async function updateResgate(id, modificacoes) {
  const updateResgate = await Resgate.findByIdAndUpdate(id, modificacoes, {
    new: true,
    runValidators: true,
  });
  if (!updateResgate){
    throw new Error("Resgate não encontrado");
  }
  return updatedProduct;
}

async function deleteResgate(id) {
    const deleteResgate = await Resgate.findByIdAndDelete(id);
    if(!deletedResgate){
        throw new Error("Resgate não encontrado");
    }
    return deletedResgate;
}

export {
  getAllResgates,
  getResgate,
  createResgate,
  updateResgate,
  deleteResgate,
};
