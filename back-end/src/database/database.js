const mongoose = require('mongoose');

function connectToDataBase() {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDB CONECTADO!!');
    })
    .catch((err) => {
      return console.log(`ERRO AO CONECTAR AO BANCO DE DADOS: ${err}`);
    });
}

module.exports = connectToDataBase;
