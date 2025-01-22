import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/sequelize';
import router from './routes/router';
import HttpError from './utils/error/httpError';
import errorMiddleware from './utils/middlewares/errorMiddleware';
import cors from 'cors';

dotenv.config();


const PORT = process.env.SERVER_PORT || 3000
const server = express();

server.use(cors())
server.use(express.json());
server.use('/api', router);
server.use(errorMiddleware);


server.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}\n`);
})

sequelize.sync().then(() => {
    console.log("Database connected successfully");
})