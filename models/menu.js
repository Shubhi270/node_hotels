const mongoose = require('mongoose');

const menuItemsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    required: true,
    enum: ["sweet", "sour", "spicy"],
  },
  is_Drink: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  num_sales : {
    type: Number,
    default: 0,
  }

});

const MenuItem = mongoose.model("menuItem", menuItemsSchema);

module.exports = MenuItem;