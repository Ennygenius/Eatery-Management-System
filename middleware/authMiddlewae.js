import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Order from "../models/bills";

dotenv.config();

const validateToken = (req, reply, done) => {
  let authHeader = req.headers.authorization;
  try {
    if (authHeader || authHeader.startsWith("Bearer")) {
      const token = authHeader.split(" ")[1];
      if (!token) {
        return reply.send({ Err: "No or Wrong Token || Unauthorized" });
      } else {
        const decode = jwt.verify(token, process.env.SECRET_TOKEN);

        req.user = decode.user;
        console.log(req.user);
      }
      done();
    } else {
      return reply.send({ Err: "Unauthorized" });
    }
  } catch (error) {
    return reply.send({ Err: "An Error or Anauthorized", error });
  }
};

export const admin = (req, reply, done) => {
  console.log(req.user);
  try {
    if (!req.user || req.user.role !== "Admin") {
      return reply.send({ Err: "unauthorized" });
    }
    done();
  } catch (e) {
    console.log(e, "An Eror occured");
  }
};

export default validateToken;
