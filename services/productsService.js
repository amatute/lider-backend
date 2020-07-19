const Product = require('../models/productModel');
const { isPalindrome, applyDiscount, isNumeric } = require('../utils/helpers');
const AppError = require('../utils/AppError');

const searchById = async searchTerm => {
  try {
    let product;
    if (isNumeric(searchTerm)) {
      product = await Product.findOne({ id: searchTerm }).lean();
    }
    const payload = {
      currentPage: 1,
      pages: product ? 1 : 0,
      searchTerm,
      products: product ? [product] : []
    };
    return payload;
  } catch (error) {
    throw new AppError(`There was a problem with the request.`, 500);
  }
};

const searchByBrandOrDescription = async params => {
  const { searchTerm } = params;
  const page = params.page * 1 || 1;
  const limit = params.limit * 1 || 100;
  const skip = (page - 1) * limit;
  let productSearchResult = [];
  try {
    const query = Product.find()
      .or([
        { brand: { $regex: searchTerm, $options: 'i' } },
        { description: { $regex: searchTerm, $options: 'i' } }
      ])
      .lean();
    productSearchResult = await query.skip(skip).limit(limit);

    const numOfProducts = await Product.find()
      .or([
        { brand: { $regex: searchTerm, $options: 'i' } },
        { description: { $regex: searchTerm, $options: 'i' } }
      ])
      .countDocuments();

    const payload = {
      currentPage: page,
      pages: Math.ceil(numOfProducts / limit),
      searchTerm,
      products: productSearchResult
    };
    return payload;
  } catch (error) {
    throw new AppError(`There was a problem with the request.`, 500);
  }
};

exports.searchProducts = async params => {
  const { searchTerm } = params;
  const productsSearchResult =
    searchTerm.length <= 3
      ? await searchById(searchTerm)
      : await searchByBrandOrDescription(params);

  if (isPalindrome(searchTerm)) {
    return {
      ...productsSearchResult,
      products: applyDiscount(productsSearchResult.products)
    };
  }
  return productsSearchResult;
};
