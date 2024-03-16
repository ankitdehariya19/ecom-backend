
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  star: String,
  reviews: String,
  prevPrice: {
    type: String,
    required: true,
  },
  newPrice: {
    type: String,
    required: true,
  },
  company: String,
  color: String,
  category: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
