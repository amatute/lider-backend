const { searchProducts } = require('../services/productsService');

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
