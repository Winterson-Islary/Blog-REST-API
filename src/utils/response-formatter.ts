import type { Result } from "neverthrow";
import type { ResponseDTO } from "@/dtos";
/**
 * Custom Modules
 */
import type { AppError } from "@/models/errors";

export function createResponse<T>(
	payload: Result<T, AppError>,
	reqPath: string,
	location?: string,
	meta?: Record<string, unknown>,
): ResponseDTO<T | null> {
	const isDev = process.env.NODE_ENV !== "production";

	if (payload.isOk()) {
		return {
			success: true,
			message: "Operation successful",
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
		errorStack: isDev ? error.errorStack : undefined,
		stackTrace:
			isDev && error.stack
				? error.stack.split("\n").map((l) => l.trim())
				: undefined,
		timestamp: new Date().toISOString(),
		path: reqPath,
	};
}
