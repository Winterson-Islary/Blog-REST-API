import { Hono } from "hono";
/**
 * Custom Modules
 */
import v1Routes from "./v1";

const v1Router = new Hono().route("/v1", v1Routes);

export default v1Router;
