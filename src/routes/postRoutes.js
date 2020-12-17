const express = require('express');
const postController = require('../controllers/postController');

async function routes(app) {
  const router = express.Router();

  app.use('/post', router);

  router.get('/posts', postController.findPosts);
  router.get('/:id', postController.findPost);
  router.put('/:id', postController.updatePost);
  router.post('/', postController.createPost);
  router.delete('/:id', postController.deletePost);
}

module.exports = routes;
