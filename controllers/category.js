import Category from "../models/category.js";

export const getAllCategory = async (req, reply) => {
  try {
    const category = await Category.find({});

    reply.send({ category });
  } catch (e) {
    console.log(e);
  }
};

export const createCategory = async (req, reply) => {
  try {
    const category = await Category.create(req.body);
    reply.send(category);
  } catch (e) {
    console.log(e);
  }
};

export const updateCategory = async (req, reply) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body);
    reply.send(category);
  } catch (e) {
    console.log(e);
  }
};

export const deleteCategory = async (req, reply) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id, req.body);
    reply.send({ category });
  } catch (e) {
    console.log(e);
  }
};
