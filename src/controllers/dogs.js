const express = require('express');
const router = express.Router();
const Dog = require('../models/dog');

router.get('/', async (req, res, next) => {
  try {
    const { attribute, order, pageNumber, limit } = req.query;

    const sort = attribute ? [[attribute, order || 'ASC']] : [];
    const offset = pageNumber && limit ? (pageNumber - 1) * limit : 0;
    const options = { offset, limit };

    const dogs = await Dog.findAll({ order: sort, ...options });

    res.json(dogs);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { name, color, tail_length, weight } = req.body;

    if (typeof tail_length !== 'number' || tail_length < 0 || typeof weight !== 'number' || weight < 0) {
      return res.status(400).json({ error: 'Invalid tail_length or weight value' });
    }

    const newDog = await Dog.create({
      name,
      color,
      tail_length,
      weight,
    });

    res.json(newDog);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({ error: 'Dog with the same name already exists' });
    }

    next(error);
  }
});

module.exports = router;
