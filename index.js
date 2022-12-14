const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const schema = require('./graphql/schema')
const sign_in_up = require('./graphql/sign_in_up')
const { graphqlHTTP } = require('express-graphql');
const { authenticate } = require('./middlewares/auth')

// usar los metodos de las librerias
const app = express();

//Cors
app.use(cors());


app.use('/sesion', graphqlHTTP({
  schema: sign_in_up,
  graphiql: true
}))

//Authentication
app.use(authenticate)
//Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());






//base de datos
// db.one('SELECT * FROM pais')
//   .then((data) => {
//     console.log('DATA:', data)
//   })
//   .catch((error) => {
//     console.log('ERROR:', error)
//   })

//routes setup
//app.get("/", (req, res) => {
//res.send("Hola, este es el servidor para la pag de veterinaria c:");
//});

//app.use('/api/veterinaria', require('./routes/veterinaria'));
// app.use("/vetapi/categoria", require("./routes/categoria"));
// app.use("/vetapi/producto", require("./routes/producto"));
// app.use("/vetapi/servicio", require("./routes/servicio"));
// app.use("/vetapi/usuario", require("./routes/usuario"));
//listen port      GET POST  DELETE PUT
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;


app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(port, host, () => {
  console.log(`Servidor esta siendo ejecutado en el puerto ${port}`);
});
