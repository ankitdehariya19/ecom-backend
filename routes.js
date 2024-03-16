// backend/routes.js
const express = require('express');
const productRoute = require('./routes/productRoute');

const router = express.Router();

// Use the productRoute for product-related routes
router.use('/products', productRoute);

module.exports = router;
