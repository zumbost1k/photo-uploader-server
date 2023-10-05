const express = require('express');
const path = require('path');
require('dotenv').config();

const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json({ extended: true }));
app.use('/photos', express.static(path.join(__dirname, 'photos')));
app.use('/api', require('./routes/upload.route'));

const PORT = 5000;

app.listen(PORT, () => {
  console.log('server started...');
});
