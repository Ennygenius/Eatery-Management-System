import mongoose from "mongoose";

const Bills = new mongoose.Schema({
  name: {
    type: String,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },

  orders: [
    {
      product: {
        type: mongoose.Types.ObjectId,
        ref: "product",
      },
      quantity: Number,
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  payment_date: {
    type: Date,
    default: Date.now,
  },
  payment_status: {
    type: String,
    enum: {
      values: ["Pending", "Successful", "Declined"],
      message: "{VALUE} is not supported",
    },
    default: "Pending",
  },
  payment_medium: {
    type: String,
    enum: {
      values: ["cash", "pos", "online", "transfer"],
      message: "{VALUE} is not supported",
    },
    default: "cash",
  },
  licensedBy: {
    type: mongoose.Types.ObjectId,
    ref: "staff",
  },
});

const Order = mongoose.model("order", Bills);
export default Order;
