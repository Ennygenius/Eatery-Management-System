import { getUser, login, signUp } from "../controllers/auth.js";
import validateToken from "../middleware/authMiddlewae.js";

const routes = async (route, _options) => {
  route.post("/signup", signUp);
  route.post("/login", login);
  route.get("/getUser", { preHandler: validateToken }, getUser);
};

export default routes;
