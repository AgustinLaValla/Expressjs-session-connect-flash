const express = require('express');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const indexRoutes = require('./routes/home.routes');


const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs'); //Set template engine

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(session({
    saveUninitialized:false,
    resave:false,
    secret: 'mySecretKey'
}));
app.use(flash());

//global Variables
app.use((req,res,next) => {
    res.locals.message = req.flash('message'); //Set global session variables
    console.log(req.flash('message'));
    next();
});

//Routes
app.use(indexRoutes);

module.exports = { app }