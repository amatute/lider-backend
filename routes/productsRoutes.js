const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

// routes
router.route('/search').get(productController.searchProducts);
router.route('/').get(productController.getAllProducts);
router.route('/:id').get(productController.getProduct);

module.exports = router;
