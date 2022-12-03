const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});

require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json());

// app.use(cookieparser());

// we link the router files to make our route easy
app.use(require('./router/auth'));

const PORT = process.env.PORT;


// Middleware
const middleware = (re, res, next) => {
    console.log(`Middleware world`);
    next();
}


// app.get('/', (req, res) => {
//     res.send(`Hello world`);
// });
// app.get('/about', middleware, (req, res) => {
//     console.log(`About world`)
//     res.send(`About page`);
// });
// app.get('/contact', (req, res) => {
//     res.send(`Contact page`);
// });
app.get('/login', (req, res) => {
    res.send(`Login page`);
});
app.get('/signup', (req, res) => {
    res.send(`Registration page`);
});

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
});