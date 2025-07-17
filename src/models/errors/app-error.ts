export class AppError extends Error {
	public readonly code: number;
	public readonly location: string;
	public readonly cause?: unknown;
	public readonly stackTrace?: string[];
	public readonly errorStack?: string[];

	constructor(
		message: string,
		code: number,
		location: string,
		cause?: unknown,
		errorStack?: string[],
	) {
		super(message);
		this.name = "AppError";
		this.code = code;
		this.location = location;
		this.cause = cause;
		this.stackTrace =
			(cause instanceof Error && cause.stack?.split("\n")) || undefined;
		this.errorStack =
			errorStack ?? (cause instanceof AppError ? cause.errorStack : []);
		if (this.errorStack && message) {
			this.errorStack.push(`[${location}] ${message}`);
		}
	}
}
