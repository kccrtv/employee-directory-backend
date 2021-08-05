// npm i express mongoose cors
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// instantiate express app object
const app = express();
const employeeController = require('./controllers/employees');
const {
	handleErrors,
	handleValidationErrors,
} = require('./middleware/custom_errors');

// middleware - using built in packages since we're going to be making requests via AJAX to the server
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/employees', employeeController);

app.set('port', process.env.PORT || 8000);

app.use(handleValidationErrors);
app.use(handleErrors);

app.listen(app.get('port'), () => {
	console.log(`PORT: ${app.get('port')} ✨`);
});
