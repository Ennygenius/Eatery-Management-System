import Order from "../models/bills.js";
export const getAllOrder = async (_req, reply) => {
  try {
    const order = await Order.find({})
      .populate({
        path: "orders",
        populate: {
          path: "product",
          select: "name",
        },
      })
      .populate("licensedBy", "email");
    reply.send({ order });
  } catch (e) {
    console.log(e);
  }
};

export const createOrder = async (req, reply) => {
  const {
    name,
    phoneNumber,
    orders,
    totalPrice,
    payment_date,
    payment_status,
    payment_medium,
    licensedBy,
  } = req.body;
};

export const deleteOrder = async (req, reply) => {
  try {
    const { id } = req.params.id;
    const order = await Order.findByIdAndDelete(id, req.body);
    reply.send({ order });
  } catch (e) {
    console.log(e);
  }
};
