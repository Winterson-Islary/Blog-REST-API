import { createRoute, OpenAPIHono } from "@hono/zod-openapi";
import z from "zod";
/**
 * Custom Modules
 */
import { healthController, healthErrorController } from "@/controllers";
import { createResponseDtoSchema } from "@/dtos";

// const healthRoute = new OpenAPIHono()
// 	.get("/", healthController)
// 	.get("/error", healthErrorController);

const healthRoute = new OpenAPIHono()
	.openapi(
		createRoute({
			method: "get",
			path: "/",
			responses: {
				200: {
					content: {
						"application/json": {
							schema: createResponseDtoSchema(z.string()),
						},
					},
					description: "Returns a success message",
				},
			},
		}),
		healthController,
	)
	.openapi(
		createRoute({
			method: "get",
			path: "/error",
			responses: {
				500: {
					content: {
						"application/json": {
							schema: createResponseDtoSchema(z.null()),
						},
					},
					description: "Simulates an error",
				},
			},
		}),
		healthErrorController,
	);

export { healthRoute };
