const Product = require('../models/productModel');
const { searchProducts } = require('../services/productsService');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: 'success',
      results: products.length,
      data: {
        products
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Something went wrong 😭'
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      id: req.params.id
    });
    res.status(200).json({
      status: 'success',
      data: {
        product,
        addDiscount: req.body.addDiscount
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Something went wrong 😭'
    });
  }
};

exports.searchProducts = async (req, res) => {
  try {
    const searchResults = await searchProducts(req.query);
    res.status(200).json({
      status: 'success',
      payload: searchResults
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Something went wrong 😭'
    });
  }
};
