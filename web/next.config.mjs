import path from "node:path";
import { config as loadEnv } from "dotenv";

// Secrets live in the repo-root .env (one level up from web/), not inside the app.
// Load it into process.env before the dev/build/start server boots.
loadEnv({ path: path.resolve(process.cwd(), "..", ".env") });

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Recipe photos and markdown live outside web/ in ../data; nothing special needed,
  // the API routes read them via the Node fs APIs at request time.
};

export default nextConfig;
