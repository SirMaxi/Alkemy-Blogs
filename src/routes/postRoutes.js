const express = require('express');
const postController = require('../controllers/postController');
const postValidator = require('../validator/postValidator');

async function routes(app) {
  const router = express.Router();

  app.use('/posts', router);

  router.get('/', postController.findPosts);
  router.get('/:id', postController.findPost);
  router.put('/:id', postValidator, postController.updatePost);
  router.post('/', postValidator, postController.createPost);
  router.delete('/:id', postController.deletePost);
}

module.exports = routes;
