const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { port } = require('./src/config/env');
const routes = require('./src/routes/postRoutes');

const app = express();
require('./src/db/database');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
routes(app);

const PORT = port || 5000;
app.listen(PORT, () =>
  console.log(`El servidor arranco en el puerto ${PORT}`),
);
