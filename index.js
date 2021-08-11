const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
// const userController = require('./controllers/users');
const employeeController = require('./controllers/employees');
const {
	handleErrors,
	handleValidationErrors,
} = require('./middleware/custom_errors');
const port = process.env.PORT || 3111;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', employeeController);

app.set('port', process.env.PORT || 8000);

app.use(handleValidationErrors);
app.use(handleErrors);

app.listen(port, () => {
	console.log('🚔 on port ' + port);
});
