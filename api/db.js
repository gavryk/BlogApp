import mysql from 'mysql2';
import * as dotenv from 'dotenv';

dotenv.config({ debug: true });

export const db = mysql.createConnection({
  host: process.env.HOST_KEY,
  user: process.env.USER_KEY,
  password: process.env.PASSWORD_KEY,
  database: process.env.DB_KEY,
});
