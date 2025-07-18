import { createLogger, format, transports } from "winston";
import { env } from "@/config/env-config";

const { combine, timestamp, printf, errors, colorize } = format;

const logFormat = printf(({ level, message, label, timestamp }) => {
	const labelPart = label ? `[${label}]` : "";
	return `${timestamp} ${labelPart} ${level}: ${message}`;
});

export const baseLogger = createLogger({
	level: env.LOG_LEVEL,
	format: combine(
		timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
		errors({ stack: true }),
		logFormat,
	),
	transports: [
		new transports.Console({
			format: combine(
				colorize(),
				timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
				logFormat,
			),
		}),
	],
});
