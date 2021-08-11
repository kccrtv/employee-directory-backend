// importing mongoose to interface with mongoDB
const mongoose = require('mongoose');
// const URI = process.env.URI;
// store environment variable to set in production, otherwise use the db on local machine
const { MongoClient } = require('mongodb');
const PASSWORD = process.env.PASSWORD;
const uri = `mongodb+srv://user-me:${PASSWORD}@cluster0.mvgel.mongodb.net/employee-directory?retryWrites=true&w=majority`;
const dbName = 'employee-directory';

const mongoURI =
	process.env.NODE_ENV === 'production'
		? `${URI}/employees`
		: `mongodb://localhost/${dbName}/employees`;

// const mongoURI =
// 	process.env.NODE_ENV === 'production'
// 		? process.env.DB_URL ===
// 		  `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.mvgel.mongodb.net/employee-directory?retryWrites=true&w=majority`
// 		: 'mongodb://localhost/' + dbName;

// add options for the connection as object in second arg, replace local db address with db URI

const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
client.connect((err) => {
	const collection = client.db('test').collection('devices');
	// perform actions on the collection object
	client.close();
});

// mongoose
// 	.connect(mongoURI, {
// 		useNewUrlParser: true,
// 		useCreateIndex: true,
// 		useUnifiedTopology: true,
// 		useFindAndModify: false,
// 	})
// 	.then((instance) =>
// 		console.log(`Connected to db: ${instance.connections[0].name}`)
// 	)
// 	.catch((error) => console.log(error));

module.exports = mongoose;
