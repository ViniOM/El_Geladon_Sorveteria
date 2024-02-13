const mongoose = require("mongoose");

const { USER, PASSWORD } = process.env;
const mongoURI = `mongodb+srv://${USER}:${PASSWORD}@api-elgeladon.98tek.mongodb.net/?retryWrites=true&w=majority`;

function connectToDataBase() {
  mongoose
    .set("strictQuery", true)
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB CONECTADO!!");
    })
    .catch((err) => {
      return console.log(`ERRO AO CONECTAR AO BANCO DE DADOS: ${err}`);
    });
}

module.exports = connectToDataBase;
