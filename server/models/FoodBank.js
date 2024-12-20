const mongoose = require('mongoose');

const { Schema } = mongoose;

const foodbankSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  filter: {
    type: Schema.Types.ObjectId,
    ref: 'Filter',
    required: true
  }
});

const FoodBank = mongoose.model('FoodBank', foodbankSchema);

module.exports = FoodBank;
