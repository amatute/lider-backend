const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
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
      type: Number,
      required: [true, 'A product must have a price']
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
