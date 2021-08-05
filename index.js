// npm i express mongoose cors
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// instantiate express app object
const app = express();

// middleware - using built in packages since we're going to be making requests via AJAX to the server
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), () => {
	console.log(`PORT: ${app.get('port')} ✨`);
});
