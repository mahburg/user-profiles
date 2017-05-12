const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

const config = require('./config');
const userCtrl = require('./controller/userCtrl');
const profileCtrl = require('./controller/profileCtrl');
// const middleware = require('./controller/middleware')

var corsOptions = {origin: 'http://localhost:8000'};
// var corsOptions = {origin: 'http://google.com'};

const app = express();

app.use(express.static('public'));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(session(config));
// app.use(middleware.auth);

//---------------ENDPOINTS-------------------------------------
app.post('/api/login',userCtrl.login);
// app.post('/api/login',middleware.auth ,userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriendsProfiles);
//-------------------------------------------------------------

// app.listen(8000, ()=> {console.log("Listening on port: 8000")});
app.listen(8000, function() {
    console.log("Listening on port: 8000")
});