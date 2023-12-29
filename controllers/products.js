import Product from "../models/products.js";

const getAllProducts = async (req, reply) => {
  try {
    const product = await Product.find({}).populate("category");
    reply.send({ product });
  } catch (error) {
    console.log(error);
  }
};

const createProduct = async (req, reply) => {
  const file = await req.file;
  if (!file) {
    return reply.send({ Err: "image field is required" });
  }
  const { name, description, price, discountPrice, category, quantity } =
    req.body;
  try {
    const product = new Product({
      name,
      description,
      price,
      discountPrice,
      category,
      quantity,
      image: file.path,
    });
    await product.save();
    reply.send({ product });
  } catch (error) {
    console.log(error);
  }
};

const getSingleProduct = async (req, reply) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    reply.send({ product });
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req, reply) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body);
    reply.send({
      msg: `product with the id ${id} has been updated successfully`,
    });
    console.log(product);
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req, reply) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    reply.send({ product });
  } catch (error) {
    console.log(error);
  }
};
export {
  getAllProducts,
  createProduct,
  updateProduct,
  getSingleProduct,
  deleteProduct,
};
