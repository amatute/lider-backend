const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();
router.param('search', (req, res, next, val) => {
  next();
});

router.route('/').get(productController.getAllProducts);

router.route('/search').post(productController.search);

module.exports = router;
