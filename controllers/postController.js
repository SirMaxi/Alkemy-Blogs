// Aca van a estaar las funciones de las rutas

// Necesitas pedir los modelos de la base de datos
// const db = require('../models/index');

async function test(req, res) {
  try {
    res.send('Hola');
  } catch (error) {
    console.log(error);
    res.status(400);
  }
}

module.exports = { test };
