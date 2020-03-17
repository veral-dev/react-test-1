const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const hbs = require('hbs');
const logger = require('morgan');
const path = require('path');
const express = require('express')
const cors = require('cors')
const flash = require("connect-flash");


module.exports = app => {

    // Middleware Setup
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());

    // Express View engine setup
    app.use(require('node-sass-middleware')({
        src: path.join(__dirname, '..', 'public'),
        dest: path.join(__dirname, '..', 'public'),
        sourceMap: true
    }));

    app.use(flash());

    const whitelist = ['http://localhost:3000']
    const corsOptions = {
        origin: (origin, cb) => {
            const originWhitelisted = whitelist.includes(origin)
            cb(null, originWhitelisted)
        },
        credentials: true        // RUTAS PERSISTENTES
    }
    app.use(cors(corsOptions))

    app.set('views', path.join(__dirname, '..', 'views'));
    app.set('view engine', 'hbs');
    app.use(express.static(path.join(__dirname, '..', 'public')));
}