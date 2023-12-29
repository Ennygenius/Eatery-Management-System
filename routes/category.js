import {
  createCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "../controllers/category.js";
import validateToken, { admin } from "../middleware/authMiddlewae.js";

const routes = async (route, _options) => {
  route.get("/", { preHandler: [validateToken] }, getAllCategory);
  route.post("/create", { preHandler: [validateToken] }, createCategory);
  route.patch("/update/:id", { preHandler: [validateToken] }, updateCategory);
  route.delete("/delete/:id", { preHandler: [validateToken] }, deleteCategory);
};

export default routes;
