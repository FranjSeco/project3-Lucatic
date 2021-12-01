<<<<<<< HEAD
import express from "express";

import mongoose from "mongoose";

import { mockUsers } from "./mockUsers/mockUsers.js";
import userRoute from "./routes/users.js";

const app = express();

import cors from "cors";
import bodyParser from "body-parser";

mongoose.connect("mongodb://localhost:27017/proyectoFinal", {
=======
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import { mockUsers } from './mockUsers/mockUsers.js'
import rutas from './routes/users.js';
import user from './models/users.js';
mongoose.Promise = global.Promise;


let dbData = user;

mongoose.connect('mongodb://localhost:27017/proyectoFinal', {
>>>>>>> 523c5388bf5638f60a3d0b74337ce1fe6c2d4e69
  useNewUrlParser: true,
  //useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database sucessfully connected ')
},
  error => {
    console.log('Database error: ' + error)
  });



//express
const app = express();
//la informacion se pasa a json
app.use(bodyParser.json());
//la informacion se pasa a array o string
app.use(bodyParser.urlencoded({
  extended: false
}));

<<<<<<< HEAD
app.post("/register", userRoute);

// mockUsers.map((item) => {
//   createUser({
//     name: item.user,
//     genero: item.genero,
//     email: item.email,
//     password: item.password,
//   });
// });

app.listen(8080, () => {
  console.log("Escuchando por el puerto 8080");
});

app.get("/register", (req, res) => {
  res.send("invalid endpoint");
  console.log(res);
});
=======
///seguridad; permite accesder a servidores de terceros; elegir proveedores en especifico por ej
app.use(cors());

// API root
app.use('/api', rutas);

// export const createUser = (req, res, next) => {
//   UserModel.create({
//     name: req.name,
//     genero: req.genero,
//     email: req.email,
//     password: req.password,
//   })
// };

const fakeUsers = (req, res, next) => {
  user.create({
    name: req.name,
    genero: req.genero,
    email: req.email,
    password: req.password,
  })
}

dbData.find((err, data) => {
  data.map(item => {
    console.log(item)
  })
})
dbData.find(function (err, data) {
  if (data.length < 4) {
    mockUsers.map((item) => {

      fakeUsers(item)
    });
    console.log('Relleno agregado')
  } else {
    console.log('Hay suficientes usuarios')
  }
});


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
>>>>>>> 523c5388bf5638f60a3d0b74337ce1fe6c2d4e69
