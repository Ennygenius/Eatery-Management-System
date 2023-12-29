import Staff from "../models/staffs.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const signUp = async (req, reply) => {
  const { firstName, lastName, email, gender, role, password, repeatPassword } =
    req.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !gender ||
    !password ||
    !repeatPassword
  ) {
    return reply.send({ Err: "The fields are required" });
  }
  if (password !== repeatPassword) {
    return reply.send({ Err: "Please the password does not match" });
  }

  const user = await Staff.findOne({ email }).select("+password");

  if (user) {
    return reply.send({
      Err: "Please the user with that email already exists",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const staff = await Staff.create({
    firstName,
    lastName,
    email,
    gender,
    role,
    password: hashPassword,
  });

  return reply.send({ staff });
};

const login = async (req, reply) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return reply.send({ Err: "The fields are required" });
  }

  const user = await Staff.findOne({ email });
  if (!user) {
    return reply.send({ Err: "User credentials invalid" });
  }

  const comparePassword = await bcrypt.compare(password, user.password);

  if (!comparePassword) {
    return reply.send({ Err: "User password is wrong" });
  }

  const payload = { user };
  const token = jwt.sign(payload, process.env.SECRET_TOKEN, {
    expiresIn: "10d",
  });

  if (user) {
    reply.send({
      firstName: user.firstName,
      lastName: user.lastName,
      email,
      token,
    });
  }
};

const getUser = async (req, reply) => {
  const user = await req.user;
  reply.send({ user });
};
export { signUp, login, getUser };
