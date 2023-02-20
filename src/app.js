const express = require('express');
const { PORT = 7000 } = require('dotenv').config();

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
