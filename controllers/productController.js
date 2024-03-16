
const Product = require('../models/product');

const productController = {
  getAllProducts: async (req, res, next) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      next(error); 
    }
  },

  createProduct: async (req, res, next) => {
    try {
      const newProduct = await Product.create(req.body);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  },

  getProductById: async (req, res, next) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = productController;
