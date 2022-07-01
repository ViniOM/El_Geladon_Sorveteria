const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId(idParam)) {
    return res.status(400).send({ message: 'ID invalido!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const paleta = req.body;
  if (
    !paleta ||
    !paleta.sabor ||
    !paleta.descricao ||
    !paleta.foto ||
    !paleta.preco
  ) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos da paleta!' });
  }
  next();
};

module.exports = {
    validId,
    validObjectBody,
}