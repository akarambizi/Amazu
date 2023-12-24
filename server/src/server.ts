import app from "./app";
import { connectDB } from "./database/dbConnect";
import { logger } from "./utils";

const port = process.env.PORT || '5000';

connectDB().then(() => {
    app.listen(port, () => {
        logger.info(`Server listening on port ${port}`);
    });
});