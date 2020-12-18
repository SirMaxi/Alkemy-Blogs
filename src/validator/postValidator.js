const { check } = require('express-validator');

const imageformats = ['.jpg', '.png'];

const postValidator = [
  check('title')
    .isLength({ min: 4, max: 30 })
    .withMessage('Title must have between 4 to 30 characters'),
  check('content')
    .isLength({ min: 10, max: 200 })
    .withMessage('Content must have between 10 to 200 characters'),
  check('image')
    .custom((url) => {
      const format = url.slice(-4);
      return imageformats.includes(format);
    })
    .withMessage('The image must be a png or jpg format'),
];

module.exports = postValidator;
