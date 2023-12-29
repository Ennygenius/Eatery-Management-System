import multer from "fastify-multer";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
} from "../controllers/products.js";
import storage from "../utils/cloudinary.js";
import validateToken from "../middleware/authMiddlewae.js";

const route = async (routes, _options) => {
  const upload = multer({ storage: storage });

  routes.get("/", { preHandler: validateToken }, getAllProducts);
  routes.post(
    "/",
    { preHandler: [upload.single("file"), validateToken] },
    createProduct
  );
  routes.patch("/:id", { preHandler: validateToken }, updateProduct);
  routes.get("/:id", { preHandler: validateToken }, getSingleProduct);
  routes.delete("/:id", { preHandler: validateToken }, deleteProduct);
};

export default route;
