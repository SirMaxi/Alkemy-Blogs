const { validationResult } = require('express-validator');
const Boom = require('@hapi/boom');
const { Post } = require('../db/database');

async function findPosts(req, res) {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    res.send(Boom.badRequest);
  }
}

async function findPost(req, res) {
  try {
    const Id = req.params.id;
    const post = await Post.findOne({
      where: { id: Id },
    });
    if (post) {
      return res.json(post);
    }
    res.send('Post not found');
  } catch (error) {
    res.send(Boom.badImplementation);
  }
}

async function updatePost(req, res) {
  try {
    const post = await Post.findOne({
      where: { id: req.params.id },
    });
    if (post) {
      await Post.update(req.body, {
        where: { id: req.params.id },
      });
      res.send('Post updated correctly');
    }
  } catch (error) {
    res.send(Boom.badImplementation);
  }
}

async function createPost(req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const post = await Post.create(req.body);
    res.json(post);
  } catch (error) {
    res.send(Boom.badImplementation);
  }
}

async function deletePost(req, res) {
  try {
    const { id } = req.params;
    const post = await Post.findOne({
      where: { id },
    });
    if (!post) {
      return res.send(Boom.notFound);
    }
    await Post.destroy({
      where: { id },
    });
    res.json({ message: 'The post was deleted successfully' });
  } catch (error) {
    res.send(Boom.badImplementation);
  }
}

module.exports = {
  findPosts,
  findPost,
  updatePost,
  createPost,
  deletePost,
};
