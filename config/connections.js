const { Sequelize } = require("sequelize");

require("dotenv").config();

const sequelize = process.env.JAWSDB_URL
	? new Sequelize(process.env.JAWSDB_URL)
	: new Sequelize(
			process.env.DB_NAME,
			process.env.DB_USER,
			process.env.DB_PASSWORD,
			{
				host: "localhost",
				dialect: "mysql",
				// port: "3306," Do I need
				dialectOptions: {
					decimalNumbers: true,
				},
			}
	  );

module.exports = sequelize;

// Or this one from the Travellers App code:

// const Sequelize = require("sequelize");
// require("dotenv").config();

// const connectionURI =
// 	process.env.JAWSDB_URL ||
// 	`mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:3306/${process.env.DB_NAME}`;

// const sequelize = new Sequelize(connectionURI);

// module.exports = sequelize;
