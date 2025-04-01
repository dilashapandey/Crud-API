const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  image: {
        type: String,
        required: false,
    },
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Product', productSchema);