import { OpenAPIHono } from "@hono/zod-openapi";
/**
 * Custom Modules
 */
import { healthRoute } from "./health.route";

const router = new OpenAPIHono({ strict: false }).route("/health", healthRoute);

export default router;
