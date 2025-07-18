import type { ContentfulStatusCode } from "hono/utils/http-status";
import { z, type ZodTypeAny } from "zod";

export interface ResponseDTO<T> {
	success: boolean; // Indicates if the request was successful
	message: string; // Human-readable status message
	code: ContentfulStatusCode; // Http-error status code
	data?: T; // Payload returned in case of success
	errorStack?: string[]; // Developer-friendly list of errors (shown in dev only)
	stackTrace?: string[]; // Full stack trace (shown in dev only)
	location?: string; // URI of created/updated resource (e.g., /api/v1/users/123)
	meta?: Record<string, unknown>; // Optional metadata (pagination, totals, etc.)
	timestamp: string; // ISO timestamp of the response
	path?: string; // The endpoint path that was called
}

/**
 * Creates a Zod schema for the generic ResponseDTO.
 * This function takes a Zod schema for the `data` payload and wraps it
 * with the other fields of your standard API response structure.
 *
 * @param dataSchema - A Zod schema for the generic type T in the data payload.
 * @returns A Zod schema for the complete ResponseDTO object.
 */
export const createResponseDtoSchema = <T extends ZodTypeAny>(
	dataSchema: T,
) => {
	return z.object({
		success: z.boolean(),
		message: z.string(),
		code: z.number(),
		data: dataSchema.optional().nullable(),
		errorStack: z.array(z.string()).optional(),
		stackTrace: z.array(z.string()).optional(),
		location: z.string().optional(),
		meta: z.record(z.string(), z.unknown()).optional(),
		timestamp: z.iso.datetime({ message: "Invalid ISO datetime string" }),
		path: z.string().optional(),
	});
};
