const mongoose = require('mongoose');
const paletasService = require('../services/paleta.service');

const findAllPaletasController = async (req, res) => {
  const paletas = await paletasService.findAllPaletasService();
  if (paletas.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhuma paleta cadastrada!' });
  }
  res.send(paletas);
};

const findByIdPaletaController = async (req, res) => {
  const idParam = req.params.id;
  const chosenPaleta = await paletasService.findByIdPaletaService(idParam);
  if (!chosenPaleta) {
    res.status(404).send({ message: 'Paleta não encontrada!' });
  }
  res.send(chosenPaleta);
};

const createPaletaController = async (req, res) => {
  const paleta = req.body;

  const newPaleta = await paletasService.createPaletaService(paleta);
  res.status(201).send(newPaleta);
};

const updatePaletaController = async (req, res) => {
  const idParam = req.params.id;
  const paletaEdit = req.body;
  const updatedPaleta = await paletasService.updatePaletaService(
    idParam,
    paletaEdit,
  );
  res.send(updatedPaleta);
};

const deletePaletaController = async (req, res) => {
  const idParam = req.params.id;
  await paletasService.deletePaletaService(idParam);

  return res.send({ message: 'Paleta deletada com sucesso!' });
};

module.exports = {
  findAllPaletasController,
  findByIdPaletaController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};
