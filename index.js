const express = require('express');

const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');

var employeeController = require('./controllers/employeeController');
var adminController = require('./controllers/adminController');

var app = express();

app.use(bodyParser.json());

app.listen(3000, () => console.log('Server Started at port :  3000'));

app.use('/employees', employeeController);
app.use('/admins', adminController);