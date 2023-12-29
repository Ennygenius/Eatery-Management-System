import mongoose from "mongoose";

const Products = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please the product's name is required"],
    },
    image: {
      type: String,
      default: "",
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "the price field is required"],
    },
    discountPrice: {
      type: Number,
      required: [true, "the discount price field is required"],
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "category",
    },
    quantity: {
      type: Number,
      required: [true, "the quantity field is required"],
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("product", Products);

export default Product;
