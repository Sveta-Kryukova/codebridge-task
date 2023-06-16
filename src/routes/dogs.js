const express = require('express');
const router = express.Router();
const Dog = require('../models/dog');

router.get('/', async (req, res, next) => {
  try {
    const { attribute, order, pageNumber = 1, limit = 10 } = req.query;

    const sortAttribute = attribute || 'name';
    const sortOrder = order === 'desc' ? 'DESC' : 'ASC';

    const dogs = await Dog.findAll({
      order: [[sortAttribute, sortOrder]],
      offset: (pageNumber - 1) * limit,
      limit: limit,
    });

    res.json(dogs);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
