import dotenv from 'dotenv';
import { Dialect } from 'sequelize';
import { Options } from 'sequelize';


dotenv.config();
  
const dbConfig: Options = {
    database: process.env.DB_NAME || 'default_database',
    username: process.env.DB_USER || 'default_user',
    password: process.env.DB_PASSWORD || 'default_password',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    dialect: 'postgres',
};

export = dbConfig;