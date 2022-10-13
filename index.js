const { PORT, URL_MONGO } = require('./config')
const express = require('express');
const cluster = require('cluster');
const os = require('os');

const compression = require('compression');
const winston = require("./winston");

const { winstonInfo } = require("./winston/winstonLoger")

const argumentos = require('./yargs');
const MODO = argumentos.modo;
const numeroCpu = os.cpus().length;
const processID = process.pid;

const app = express();


//Inicio servidor le paso app para sockets
const { Server: HttpServer } = require('http');
const httpServer = new HttpServer(app);

//Session
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");



//Middleware
app.use(express.static("public"));
app.use(compression());
// app.use(winstonInfo);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(session({
	store: new MongoStore({
		mongoUrl: URL_MONGO,
	}),
	secret: "algunSecreto",
	resave: true,
	rolling: true,
	saveUninitialized: false,
	cookie: {
		maxAge: 600000,  //10 minutos 
	}
}))


//Passport 
const passport = require('./utils/auth/passport')
app.use(passport.initialize())
app.use(passport.session())

//Incio sockets
const io = require('./sockets');
io(httpServer);


/*-----------------Inicio Configuracion de handlebars------------------*/
const { engine } = require('express-handlebars');


app.engine(
	"hbs",
	engine({
		extname: "hbs",
		defaultLayout: "main",
		layoutsDir: __dirname + "/views/layouts",
		partialsDir: __dirname + "/views/partials"
	})
);

app.set("view engine", "hbs");
app.set("views", "./views");
/*-----------------FIN Configuracion de handlebars------------------*/

/*
Uso de reutas dinamicas -----> https://github.com/leifermendez/node-seed-api/blob/main/app/routes/index.js
*/

// app.use('/api', require('./routers'))

app.get("/", (req, res) => {
	res.redirect("/api/productos");
});

const routerUsuario = require('./modules/usuario/usuariosRoutes');
const routerProductos = require('./modules/productos/productosRouter');

app.use("/api/usuarios", routerUsuario);
app.use("/api/productos", routerProductos);
// app.use((error, req, res, next) => {
// 	winston.error(error.message)
// 	res.status(500).send(error.message);
// });

/*
	Inicio servidor segun modo
*/
if (MODO === "FORK") {

	httpServer.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});

} else {
	console.log(`Procesos: ${processID}, - isMaster: ${cluster.isMaster}, - numeroCpu: ${numeroCpu}`);
	if (cluster.isPrimary) {
		for (let i = 0; i < numeroCpu; i++) {
			cluster.fork()
		}
		cluster.on('exit', (worker) => {
			console.log(`Proceso ${worker.process.pid} terminado`);
		})
	} else {
		httpServer.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });
	}
}

module.exports = app;


