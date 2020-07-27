const express = require('express');
const bodyParser = require('body-parser');
//const nodemon = require('nodemon');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/authController')(app);
require('./controllers/projectController')(app);
//repassando o app para o controller é necessario...
// ...exportar o app para o authconroller (export)

app.listen(3000);





