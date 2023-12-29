import mongoose from "mongoose";

const Staffs = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "The First Name filed is required"],
    },
    lastName: {
      type: String,
      required: [true, "The Last Name filed is required"],
    },
    email: {
      type: String,
      required: [true, "The Email filed is required"],
    },
    profileImg: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      enum: {
        values: ["MALE", "Female"],
        message: "{VALUE} is not supported",
      },
    },
    role: {
      type: String,
      enum: {
        values: ["Staff", "Admin"],
        message: "{VALUE} is not supported",
      },
      default: "Staff",
    },
    password: {
      type: String,
      required: true,
      maxLength: 200,
      minLength: [4, "Minimum Password should be 4 or abouve"],
    },
    repeatPassword: {
      type: String,
      maxLength: 200,
      minLength: [4, "Minimum Password should be 4 or abouve"],
    },
  },
  { timestamps: true }
);

const Staff = mongoose.model("staff", Staffs);
export default Staff;
