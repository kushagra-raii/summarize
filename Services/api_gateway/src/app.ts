import express, { Application } from 'express';
import routes from "./routes"
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import {errorHandler} from './middleware/errorHandler';

const app: Application = express();

// Middleware setup
app.use(express.json());
app.use(helmet()); // For security headers
app.use(morgan('dev')); // For logging HTTP requests
app.use(cors()); // For handling CORS


app.use(routes);


app.use(errorHandler);

export default app;
