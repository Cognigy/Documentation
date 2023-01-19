/**
 * application process that actually runs the whole microservice.
 */
import "dotenv/config"
import createServer from "./server";
import { serverLogs } from "./utils/logger";

const app = createServer(<string>process.env.MONGODB_DATABASE_NAME || "documentation_index")
const port: number = parseInt(<string>process.env.PORT, 10) || 3000;
const host: string = process.env.HOST || 'localhost';
const logEntry = serverLogs;

app.listen(port, () => {
    logEntry.info(`server is running on ${host} at port ${port}`);
})