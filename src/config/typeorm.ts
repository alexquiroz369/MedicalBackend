import * as dotenv from 'dotenv';

dotenv.config();

import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: process.env.TYPEORM_CONNECTION as any,
  host: process.env.TYPEORM_HOST,
  port: +process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [process.env.TYPEORM_ENTITIES],
  synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
  migrations: [process.env.TYPEORM_MIGRATIONS],
  logging: process.env.TYPEORM_LOGGING === 'true',
});
