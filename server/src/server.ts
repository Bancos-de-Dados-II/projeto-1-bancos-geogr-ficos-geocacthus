import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import router, { configIndeceServerPoint } from './routes/router';
import errorMiddleware from './utils/middlewares/errorMiddleware';
import sequelize from './config/sequelize';

dotenv.config();

const PORT = process.env.SERVER_PORT || 3000;
const server = express();

export const indeceServerPoint = `/api`;
configIndeceServerPoint(indeceServerPoint);

server.use(cors())
server.use(express.json());
server.use(`${indeceServerPoint}`, router);
server.use(errorMiddleware);

sequelize.sync().then(() => {
    console.log("Database connected successfully");
})

server.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}${indeceServerPoint}\n`);
})