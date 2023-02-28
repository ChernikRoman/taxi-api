const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/router.js');
require('dotenv').config();

const { PORT = 7000, MONGODB_URI } = process.env;

const app = express();

app.use(express.json());

app.use(router);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.send({ err: err.message });
});

mongoose.set({ strictQuery: false });
mongoose.connect(MONGODB_URI);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
