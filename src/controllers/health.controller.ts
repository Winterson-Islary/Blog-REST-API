import type { Context } from "hono";
import { err, ok } from "neverthrow";
import { AppError } from "@/models/errors";
/**
 * Custom Modules
 */
import { createResponse } from "@/utils/response-formatter";

export const healthController = async (c: Context) => {
	const response = createResponse(ok("successful"), c.req.path);

	return c.json(response);
};

export const healthErrorController = async (c: Context) => {
	const response = createResponse(
		err(new AppError("unsuccessful", 500, "health.controller.ts")),
		c.req.path,
	);

	return c.json(response);
};
