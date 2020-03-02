const express       = require('express');
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose     = require('mongoose');
const app           = express();
const cors          = require("cors");
const session    = require("express-session");
const flash = require("connect-flash");
const MongoStore = require('connect-mongo')(session);

const hostname      = 'localhost';
const port          = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.locals.title = 'Calendar Events Backend';

app.use(session({
  secret: 'ce app',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore( { mongooseConnection: mongoose.connection })
}))
app.use(flash());

let whitelist = ['http://localhost:5000', 'http://localhost:3000'];

let corsOptions = {
  origin: function(origin, callback) {
    let originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};

app.use(cors(corsOptions));

app.listen(port, () => {
    console.log(`Serving running at http://${hostname}:${port}/`);
  });

const index = require('./routes/index');
app.use('/', index);