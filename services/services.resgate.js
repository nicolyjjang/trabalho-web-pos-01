import { Resgate } from "../Models/Resgate.js";

async function getAllResgates() {
  const resgates = await Resgate.find();
  return resgates;
}

async function getResgate(id) {
  const resgate = await Resgate.findById(id);
  if (!resgate) {
    throw new Error("Resgate não encontrado");
  }
  return resgate;
}

async function createResgate(dados) {
  const newResgate = new Resgate(dados);
  const savedResgate = await newResgate.save();
  return savedResgate;
}

async function updateResgate(id, modificacoes) {
  const updatedResgate = await Resgate.findByIdAndUpdate(id, modificacoes, {
    new: true,
    runValidators: true,
  });
  if (!updatedResgate) {
    throw new Error("Resgate não encontrado");
  }
  return updatedResgate;
}

async function deleteResgate(id) {
  const deletedResgate = await Resgate.findByIdAndDelete(id);
  if (!deletedResgate) {
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
