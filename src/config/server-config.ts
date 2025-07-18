import type { OpenAPIHono } from "@hono/zod-openapi";
import packageJSON from "package.json";

export function configureOpenAPI(app: OpenAPIHono) {
	app.doc("/doc", {
		openapi: "3.0.0",
		info: {
			version: packageJSON.version,
			title: "Prototype API",
		},
	});
}
