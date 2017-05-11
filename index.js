const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const config = require('./config');
const userCtrl = require('./controller/userCtrl');
const profileCtrl = require('./controller/profileCtrl');

var corsOptions = {origin: 'http://localhost:8000'};

const app = express();

app.use(express.static(__dirname + './public'));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(session(config));

app.post('/api/login', userCtrl.login);


app.listen(8000, ()=> {console.log("Listening on port: 8000")});