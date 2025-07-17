import { Hono } from "hono";

/**
 * Custom modules
 */
import apiRoutes from "./routes";

const app = new Hono();
app.route("/api", apiRoutes);

export default {
	port: 3000,
	fetch: app.fetch,
};
