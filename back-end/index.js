const express = require('express');
const cors = require('cors');
const route = require('./src/routes/paleta.route');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use('/paletas', route);

app.listen(port, () => {
  console.log(`servidor rodando em http://localhost:${port}`);
});


