import { OpenAPIHono } from "@hono/zod-openapi";

/**
 * Custom modules
 */
import apiRoutes from "@/routes";
import { env } from "@/config";
import { configureOpenAPI } from "@/config/server-config";

const app = new OpenAPIHono();
app.route("/api", apiRoutes);
configureOpenAPI(app);

export default {
	port: env.PORT,
	fetch: app.fetch,
};
