import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import { mockUsers } from "./mockUsers/mockUsers.js";
import rutas from "./routes/users.js";
import user from "./models/users.js";
mongoose.Promise = global.Promise;

import bcrypt from 'bcryptjs';

import { createUser } from './controllers/users.js'

let dbData = user;
//mongodb://localhost:27017/proyectoFinal
mongoose
  .connect(
    "mongodb+srv://Admiche:AdmicheContraseña@cluster0.n80ht.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      //useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(
    () => {
      console.log("Database sucessfully connected ");
    },
    (error) => {
      console.log("Database error: " + error);
    }
  );

//express
const app = express();
//la informacion se pasa a json
app.use(bodyParser.json());
//la informacion se pasa a array o string
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

///seguridad; permite accesder a servidores de terceros; elegir proveedores en especifico por ej
app.use(cors());


// API root
app.use("/api", rutas);

// export const createUser = (req, res, next) => {
//   UserModel.create({
//     name: req.name,
//     genero: req.genero,
//     email: req.email,
//     password: req.password,
//   })
// };

// const fakeUsers = (req, res, next) => {
//   user.create({
//     name: req.name,
//     genero: req.genero,
//     email: req.email,
//     password: req.password,
//     edad: req.edad,
//     foto: req.foto,
//     playa: req.playa,
//     fumador: req.fumador,
//     deportista: req.deportista,
//     cinefilo: req.cinefilo,
//   })
// }

// dbData.find((err, data) => {
//   data.map((item) => {
//     console.log(item);
//   });
// });

dbData.find(function (err, data) {
  if (data.length < 4) {
    mockUsers.map((req) => {
      bcrypt.hash(req.password, 10)
        .then((hash) =>
          dbData.create({
            password: hash,
            name: req.name,
            genero: req.genero,
            email: req.email,
            edad: req.edad,
            foto: req.foto,
            playa: req.playa,
            fumador: req.fumador,
            deportista: req.deportista,
            cinefilo: req.cinefilo,
          })
        )
    });
    console.log("Relleno agregado");
  } else {
    console.log("Hay suficientes usuarios");
  }
});



// PORT
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Listening on port " + port);
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
