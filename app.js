const express = require('express');
const path = require('path');
const app = express();

const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users');
const productsRouter = require('./src/routes/products');
const session = require('express-session');
const middlewareUsuarioLogueado = require('./src/middlewares/renderUsuarioLogueado');
const verSession = require('./src/middlewares/verSession');

// Vistas
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use( session({secret: "And I am IRONMAN"}) )
app.use( verSession )
app.use( middlewareUsuarioLogueado );

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/?', usersRouter);
app.use('/?', productsRouter);

app.listen(3000, ()=> console.log("servidor corriendo en el puerto 3000"));