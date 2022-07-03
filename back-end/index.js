require('dotenv').config();
const express = require('express');
const cors = require('cors');
const route = require('./src/routes/paleta.route');
const connectToDataBase = require('./src/database/database');
const app = express();
const port = process.env.PORT || 3001;

connectToDataBase();

app.use(express.json());
app.use(cors());
app.use('/paletas', route);

app.listen(port, () => {
  console.log(`servidor rodando em http://localhost:${port}`);
});


