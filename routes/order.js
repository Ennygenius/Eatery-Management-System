import { getAllOrder } from "../controllers/order.js";

const routes = async (route, _options) => {
  route.get("/", getAllOrder);
};
export default routes;
