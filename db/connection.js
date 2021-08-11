// importing mongoose to interface with mongoDB
const mongoose = require('mongoose');
const URI = process.env.URI;

// store environment variable to set in production, otherwise use the db on local machine
const dbName = 'employee-directory';

const mongoURI =
	process.env.NODE_ENV === 'production' ? process.env.DB_URL : URI;

// const mongoURI =
// 	process.env.NODE_ENV === 'production'
// 		? process.env.DB_URL
// 		: 'mongodb://localhost/' + dbName;

// add options for the connection as object in second arg, replace local db address with db URI
mongoose
	.connect(mongoURI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then((instance) =>
		console.log(`Connected to db: ${instance.connections[0].name}`)
	)
	.catch((error) => console.log(error));

module.exports = mongoose;
