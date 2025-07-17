export interface ResponseDTO<T> {
	success: boolean; // Indicates if the request was successful
	message: string; // Human-readable status message
	data?: T; // Payload returned in case of success
	errorStack?: string[]; // Developer-friendly list of errors (shown in dev only)
	stackTrace?: string[]; // Full stack trace (shown in dev only)
	location?: string; // URI of created/updated resource (e.g., /api/v1/users/123)
	meta?: Record<string, unknown>; // Optional metadata (pagination, totals, etc.)
	timestamp: string; // ISO timestamp of the response
	path?: string; // The endpoint path that was called
}
