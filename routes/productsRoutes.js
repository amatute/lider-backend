const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.route('/search').get(productController.searchProducts);

module.exports = router;
