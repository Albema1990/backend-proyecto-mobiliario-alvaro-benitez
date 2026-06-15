import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
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
      enum: ["Café", "Té", "Accesorios"],
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

    oldPrice: {
      type: Number,
      default: 0,
      min: 0,
    },

    bestSeller: {
      type: Boolean,
      default: false,
    },

    origin: {
      type: String,
      default: "",
    },

    roast: {
      type: String,
      default: "",
    },

    weight: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model("Product", productSchema);

export default Product;
