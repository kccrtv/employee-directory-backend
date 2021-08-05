// importing mongoose to interface with mongoDB
const mongoose = require('mongoose');

// store environment variable to set in production, otherwise use the db on local machine
const mongoURI =
	process.env.NODE_ENV === 'production'
		? process.env.MONGODB_URI
		: 'mongodb://localhost/employee-directory';

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
	.catch((error) => console.log('Connection failed!', error));

//export connection to use in app elsewhere

module.exports = mongoose;
