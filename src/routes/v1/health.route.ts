import { Hono } from "hono";
/**
 * Custom Modules
 */
import { healthController, healthErrorController } from "@/controllers";

export const healthRoute = new Hono()
	.get("/", healthController)
	.get("/error", healthErrorController);
