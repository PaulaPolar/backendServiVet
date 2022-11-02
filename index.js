const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

// usar los metodos de las librerias
const app = express();
require("dotenv").config();

//Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

//base de datos
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    //useCreateIndex:true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Base de datos conectada");
  });

//routes setup
//app.get("/", (req, res) => {
//res.send("Hola, este es el servidor para la pag de veterinaria c:");
//});

//app.use('/api/veterinaria', require('./routes/veterinaria'));
app.use("/vetapi/categoria", require("./routes/categoria"));
app.use("/vetapi/producto", require("./routes/producto"));
app.use("/vetapi/servicio", require("./routes/servicio"));
app.use("/vetapi/usuario", require("./routes/usuario"));
//listen port      GET POST  DELETE PUT
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
  console.log(`Servidor esta siendo ejecutado en el puerto ${port}`);
});
