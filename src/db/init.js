const sequelize = require('../config/database');
const Dog = require('../models/dog');

const initializeDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    await Dog.bulkCreate([
      {
        name: 'Neo',
        color: 'red & amber',
        tail_length: 22,
        weight: 32,
      },
      {
        name: 'Jessy',
        color: 'black & white',
        tail_length: 7,
        weight: 14,
      },
    ]);

    console.log('Database initialized successfully!');
  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    process.exit();
  }
};

initializeDatabase();
