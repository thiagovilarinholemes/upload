const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

/*
* Configurações do Mongodb
*/
mongoose.connect(
	'mongodb://localhost:27017/upload', 
	
	{
		useNewUrlParser: true
	}
);

app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));

app.use(require('./routes'));

/*
* Configuração da porta da API  
*/
app.listen(3000, console.log('Listening port: 3000 (^_^)/'));