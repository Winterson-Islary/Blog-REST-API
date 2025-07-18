import { OpenAPIHono } from "@hono/zod-openapi";
/**
 * Custom Modules
 */
import v1Routes from "./v1";
const v1Router = new OpenAPIHono().route("/v1", v1Routes);
export default v1Router;
