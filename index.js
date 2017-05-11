const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const config = require('./config');
const userCtrl = require('./controller/userCtrl');
const profileCtrl = require('./controller/profileCtrl');

var corsOptions = {origin: 'http://localhost:8000'};

const app = express();
// console.log(__dirname + "/public")
app.use(express.static('public'));
app.use(cors(corsOptions));



app.use(bodyParser.json());
app.use(session(config));

app.post('/api/login', userCtrl.login);
// app.get('/api/profiles', profileCtrl.getFriendsProfiles);
app.get('/api/profiles', profileCtrl.getFriendsProfiles);


app.listen(8000, ()=> {console.log("Listening on port: 8000")});