const express = require("express");
const morgan = require("morgan");
const { router } = require("./router/router");
const { handlerNotFoundRouter } = require("./utils/handler.router");
const app = express();
const mongoose = require('mongoose')
// Set
app.set("port", 5000);

app.use(express.json());
app.use(morgan("dev"));


app.use("/api", router);

app.use(handlerNotFoundRouter);

mongoose.connect('mongodb://localhost:27017/actvidad-BD', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch((error) => console.error('Error al conectarse a la base de datos:', error.message));
app.listen(app.get("port"), () => {
  console.log("Server on port " + app.get("port"));
});
