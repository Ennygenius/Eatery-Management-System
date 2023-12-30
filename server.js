import auth from "./routes/auth.js";
import dotenv from "dotenv";
import DbConnector from "./utils/db.js";
import fastify from "fastify";
import Products from "./routes/products.js";
import category from "./routes/category.js";
import order from "./routes/order.js";
import multer from "fastify-multer";
import cors from "@fastify/cors";

const app = fastify({
  logger: true,
});
await app.register(cors);
app.register(multer.contentParser);

dotenv.config();

app.register(Products, { prefix: "/product" });
app.register(auth, { prefix: "/auth" });
app.register(category, { prefix: "/category" });

app.register(order, { prefix: "/order" });

// app.all("*", (req, reply) => {
//   reply.send("No route found");
// });

const port = 3000;
const startServer = async () => {
  try {
    app.listen({ port, host: "0.0.0.0." }, () => {
      console.log(`Server started on port ${port}`);
      DbConnector();
    });
  } catch (err) {
    console.log(err);
  }
};
startServer();
