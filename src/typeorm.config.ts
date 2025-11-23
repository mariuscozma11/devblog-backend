import { DataSourceOptions } from 'typeorm';
import { Post } from './post/entities/post.entity';
import { User } from './user/entities/user.entity';
import * as dotenv from 'dotenv';
dotenv.config();

export const typeormConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  //
  synchronize: false,
  migrations: [__dirname + '/migrations/*.js'],
  //
  entities: [Post, User],
  logging: true,

  migrationsRun: process.env.NODE_ENV === 'production',
};
