const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    _id: String,
    id: {
      type: Number
    },
    brand: {
      type: String
    },
    description: {
      type: String
    },
    image: {
      type: String
    },
    price: {
      type: Number
    }
  },
  {
    toJSON: {
      virtuals: true
    },
    toObject: {
      virtuals: true
    }
  }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
