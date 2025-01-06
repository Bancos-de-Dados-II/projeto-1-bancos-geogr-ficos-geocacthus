import dotenv from 'dotenv';

dotenv.config();

interface DatabaseConfig {
    database: string;
    username: string;
    password: string;
    host: string;
    port: number;
    dialect: 'postgres';
}

const dbConfig : DatabaseConfig = {
    database: process.env.DATABASE || '',
    username: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT),
    dialect: 'postgres',
};

export default dbConfig;
