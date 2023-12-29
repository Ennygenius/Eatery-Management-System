import mongoose from "mongoose";

const Categories = mongoose.Schema({
  name: {
    type: String,
    required: [true, "The category name is required"],
  },
});

const Category = mongoose.model("category", Categories);

export default Category;
