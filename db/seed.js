// require Employee model
const Employee = require('../models/Employee');
// require data
const seedData = require('./seeds.json');

// delete any existing documents in the Employee collection and pass the seed data
Employee.deleteMany()
	.then(() => Employee.insertMany(seedData))
	.then(console.log)
	.catch(console.error)
	.finally(process.exit);
