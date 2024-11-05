const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'FoodBank'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
