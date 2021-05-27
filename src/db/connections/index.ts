import { Sequelize } from 'sequelize';

const DB_NAME = process.env.DB_NAME || 'latam';
const dialect = 'postgres'; /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' En latam usamos Postgresql */
const DB_PASS = process.env.DB_PASS || '123456';
const host = process.env.DB_HOST || 'localhost';
const user = process.env.DB_USER || 'postgres';

/**
 * latam trabaja con postgreSQL ->
 * npm i pg pg-hstore
 * npm i mariadb
 * npm i mysql2
 * npm i sqlite3
 * npm i tedius
 */

// conet with database
const web: any = () =>
	new Sequelize(DB_NAME, user, DB_PASS, {
		host,
		dialect,
		dialectOptions: { ssl: { rejectUnauthorized: false } },
	});

const local: any = () => new Sequelize(DB_NAME, user, DB_PASS, { host, dialect });

export default process.env.PORT ? web() : local();
