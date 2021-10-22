import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '1234',
  database: 'test',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true, // for production, make it false
  migrations: ['dist/src/db/migrations/*.js'],
  cli: {
    migrationsDir: 'dist/db/migrations',
  },
};

export default config;
