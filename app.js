const express = require('express');
const path = require('path');
const app = express();
const indexRouter = require('./src/routes/index');
const productsRouter = require('./src/routes/products');
const usersRouter = require('./src/routes/users');
const adminRouter = require('./src/routes/admin');
const apiUserRouter = require('./src/routes/api/user')
const apiProductRouter = require('./src/routes/api/product')
const session = require('express-session');
const middlewareUsuarioLogueado = require('./src/middlewares/renderUsuarioLogueado');
const verSession = require('./src/middlewares/verSession');
const cookieParser = require('cookie-parser');

let port = process.env.PORT || 3000;
// Vistas
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use( session({
    secret: "And I am IRONMAN",
    resave: true,
    saveUninitialized: true}) )
app.use( verSession )
app.use(cookieParser());
app.use( middlewareUsuarioLogueado );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/', indexRouter);
app.use('/', productsRouter);
app.use('/', usersRouter);
app.use('/', adminRouter);
app.use('/', apiUserRouter);
app.use('/', apiProductRouter);

app.listen(port, ()=> console.log(`servidor corriendo en el puerto: ${port}`));
