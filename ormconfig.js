require('dotenv').config();
module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrationsTable: 'migrations',
  migrations: ['dist/migrations/*.js'],
  synchorize: false,
  cli: {
    migrationsDir: 'src/migrations',
  },
};
