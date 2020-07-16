exports.getAllProducts = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    results: 'products.length',
    data: {
      products: 'array of products'
    }
  });
};

exports.search = (req, res, next) => {
  res.status(200).json({
    status: 'search ok',
    results: 'products.length',
    data: {
      products: 'search result'
    }
  });
};
