import { Hono } from "hono";

/**
 * Custom Modules
 */
import { healthRoute } from "./health.route";

const router = new Hono().route("/health", healthRoute);

export default router;
