import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/proyectoFinal', {
  useNewUrlParser: true,
  //useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database sucessfully connected ')
},
  error => {
    console.log('Database error: ' + error)
  });

import rutas from './routes/users.js';

//express
const app = express();
//la informacion se pasa a json
app.use(bodyParser.json());
//la informacion se pasa a array o string
app.use(bodyParser.urlencoded({
  extended: false
}));

///seguridad; permite accesder a servidores de terceros; elegir proveedores en especifico por ej
app.use(cors());

// API root
app.use('/api', rutas);

// PORT
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('Listening on port ' + port)
})

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});