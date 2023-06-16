const express = require('express');
const app = express();
const sequelize = require('./config/database');
const dogsRouter = require('./routes/dogs');
const pingRouter = require('./routes/ping');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.use('/dogs', dogsRouter);
app.use('/ping', pingRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');

    await sequelize.sync();

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      const serverUrl = `http://localhost:${PORT}`;
      console.log('\x1b[36m%s\x1b[0m', `Server running on port ${PORT}✨✨✨`);
      console.log(`To access the application, open your browser and navigate to:`);
      console.log(`\x1b[4m\x1b[32m%s\x1b[0m`, serverUrl);
    });
    
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
