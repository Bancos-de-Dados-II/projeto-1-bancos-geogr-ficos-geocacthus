import express from 'express';
import dotenv from 'dotenv';
import routes from './routes'
import sequelize from './config/sequelize';

dotenv.config();

const my_port = process.env.SERVER_PORT || 3000
const  server = express();
server.use(express.json());

server.use('/', routes);

server.listen(my_port, () => {
    console.log(`Server is running in http://localhost:${my_port}\n`);
})

sequelize.sync().then(() => {
    console.log("Database connected successfully");
})