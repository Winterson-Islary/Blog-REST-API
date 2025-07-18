import { z, type ZodError } from "zod";

const EnvSchema = z.object({
	NODE_ENV: z.string().default("development"),
	PORT: z.coerce.number().default(3000),
	LOG_LEVEL: z
		.enum(["error", "warn", "info", "http", "verbose", "debug", "silly"])
		.default("info"),
});

export type env_type = z.infer<typeof EnvSchema>;
let env: env_type;

try {
	// biome-ignore lint/style/noProcessEnv: <This is the only place where we use 'process.env'>
	env = EnvSchema.parse(process.env);
} catch (e) {
	const error = e as ZodError;
	console.error("Invalid env:\n");
	console.error(error.flatten().fieldErrors);
	process.exit(1);
}

export { env };
