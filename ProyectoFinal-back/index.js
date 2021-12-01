import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import { mockUsers } from './mockUsers/mockUsers.js'
import rutas from './routes/users.js';
import user from './models/users.js';
mongoose.Promise = global.Promise;


let dbData = user;
<<<<<<< HEAD

mongoose.connect('mongodb://localhost:27017/proyectoFinal', {
=======
//
//mongodb://localhost:27017/proyectoFinal
mongoose.connect('mongodb+srv://Admiche:AdmicheContraseña@cluster0.n80ht.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
>>>>>>> 9b3b0cf43ebc508f5612d5d8b6fb5de7958eadfb
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
