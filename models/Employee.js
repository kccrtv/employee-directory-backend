const mongoose = require('../db/connection');

const employeeSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	imagePath: {
		type: String,
		required: true,
	},
});

// name the model and use this schema to validate data against for our collection
module.exports = mongoose.model('Employee', employeeSchema);
