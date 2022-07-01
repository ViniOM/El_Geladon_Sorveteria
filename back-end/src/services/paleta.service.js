const Paleta = require("../models/paleta")

const findAllPaletasService = async () => {
  const paletas = await Paleta.find();
  return paletas;
};

const findByIdPaletaService = async(id) => {
  const paleta = await Paleta.findById(id);
  return paleta;
};

const createPaletaService = async (newPaleta) => {
  const paletaCriada = await Paleta.create(newPaleta);
  return paletaCriada;
};

const updatePaletaService = async (id, paletaEdited) => {
    const paletaAtualizada = await Paleta.findByIdAndUpdate(id, paletaEdited)
    return paletaAtualizada;
};

const deletePaletaService = async (id) => {
    return await Paleta.findByIdAndDelete(id);
};

module.exports = {
  findAllPaletasService,
  findByIdPaletaService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};
