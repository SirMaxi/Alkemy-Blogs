const { Post } = require('../db/database');

async function findPosts(req, res) {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
}

module.exports = { findPosts };
