
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes'); 

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ecom', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use('/api', routes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
