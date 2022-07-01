const express = require('express');
const route = express.Router();

const controllerPaletas = require('../controllers/paleta.controller');
const { validObjectBody, validId} = require('../middlewares/paleta.middleware')


route.get('/todas-paletas', controllerPaletas.findAllPaletasController);
route.get('/paleta/:id', validId, controllerPaletas.findByIdPaletaController);
route.post('/create', validObjectBody, controllerPaletas.createPaletaController);
route.put('/update/:id', validId, validObjectBody, controllerPaletas.updatePaletaController);
route.delete('/delete/:id', validId, controllerPaletas.deletePaletaController)

module.exports = route;




