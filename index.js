// npm i express
const express = require('express');
// instantiate express
const app = express();

// controllers
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), () => {
	console.log(`PORT: ${app.get('port')} ✨`);
});
