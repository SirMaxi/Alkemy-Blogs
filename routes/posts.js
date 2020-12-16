const express = require('express');
const postController = require('../controllers/postController');

async function routes(app) {
  const router = express.Router();

  app.use('/posts', router);

  router.get('/', postController.test);
}

module.exports = routes;
