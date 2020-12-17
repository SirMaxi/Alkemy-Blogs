const express = require('express');
const postController = require('../controllers/postController');

async function routes(app) {
  const router = express.Router();

  app.use('/post', router);

  router.get('/posts', postController.findPosts);
}

module.exports = routes;
