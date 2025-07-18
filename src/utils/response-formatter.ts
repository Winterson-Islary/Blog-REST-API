import type { Result } from "neverthrow";
import type { ResponseDTO } from "@/dtos";
import type { ContentfulStatusCode } from "hono/utils/http-status";
import { StatusCodes } from "http-status-codes";
/**
 * Custom Modules
 */
import type { AppError } from "@/models/errors";
import { env } from "@/config";

export function createResponse<T>(
	payload: Result<T, AppError>,
	reqPath: string,
	statusCode?: ContentfulStatusCode,
	location?: string,
	meta?: Record<string, unknown>,
): ResponseDTO<T | null> {
	const isDev = env.NODE_ENV !== "production";

	if (payload.isOk()) {
		return {
			success: true,
			message: "Operation successful",
			code: statusCode || StatusCodes.OK,
			data: payload.value,
			location,
			meta,
			timestamp: new Date().toISOString(),
			path: reqPath,
		};
	}

	const error = payload.error;

	return {
		success: false,
		message: error.message,
		code:
			(error.code as ContentfulStatusCode) || StatusCodes.INTERNAL_SERVER_ERROR,
		errorStack: isDev ? error.errorStack : undefined,
		stackTrace:
			isDev && error.stack
				? error.stack.split("\n").map((l) => l.trim())
				: undefined,
		timestamp: new Date().toISOString(),
		path: reqPath,
	};
}
