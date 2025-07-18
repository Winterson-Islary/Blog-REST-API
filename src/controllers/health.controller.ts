import type { Context } from "hono";
import { err, ok } from "neverthrow";
import { AppError } from "@/models/errors";
import { StatusCodes } from "http-status-codes";
/**
 * Custom Modules
 */
import { createResponse } from "@/utils/response-formatter";
import { baseLogger } from "@/config";

const logger = baseLogger.child({ label: "health.controller.ts" });

export const healthController = async (c: Context) => {
	const response = createResponse(ok("successful"), c.req.path);
	return c.json(response, StatusCodes.OK);
};

export const healthErrorController = async (c: Context) => {
	logger.warn(
		"This controller is made to simulate failure of request fulfillment",
	);
	const response = createResponse(
		err(
			new AppError(
				"unsuccessful",
				StatusCodes.INTERNAL_SERVER_ERROR,
				"health.controller.ts",
			),
		),
		c.req.path,
	);

	return c.json(response, StatusCodes.INTERNAL_SERVER_ERROR);
};
