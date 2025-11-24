const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { User, sequelize } = require('./models/user');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/register', async (req, res) => {
  try {
    await User.create(req.body);  // directly insert whatever comes
    res.json({ message: 'Registration successful!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error during registration' });
  }
});

app.listen(4000, async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL Connected. Server running on http://localhost:4000');
  } catch (err) {
    console.error('DB connection error:', err);
  }
});
