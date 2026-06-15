import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  description: {
    type: String,
    default: "",
  },

  category: {
    type: String,
    required: true,
    enum: ["cafe", "te", "accesorios"],
  },

  price: {
    type: Number,
    required: true,
    min: 0,
  },

  image: {
    type: String,
    default: "",
  },

  onSale: {
    type: Boolean,
    default: false,
  },
},
{
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

export default Product;