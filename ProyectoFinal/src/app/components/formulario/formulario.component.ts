import { Component, OnInit } from '@angular/core';
//import{DatosPersonales} from"../../model/datos-personales"

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FormsModule } from '@angular/forms';


import{AuthService} from "../../services/auth.service";

import{UserInterface} from"../../model/user-interface";


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {


  datosPersonales:UserInterface;

  constructor(private formBuilder:FormBuilder, private from: FormsModule,private servicio:AuthService) {
    
  this.datosPersonales = {} as UserInterface  ;
     }

  ngOnInit(): void {
    this.getCorreo()
  }

  agregarDatosPersonales(){
//poner el servicio para dar entrada a la base de datos
    console.log(this.datosPersonales)
  }

  getCorreo(){
//poner en el back y en el servicio metodos para coger el correo de la base de datos
var cogerUsuario;


  }

/*
  angForm = this.formBuilder.group({
    
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    edad: ['', Validators.required],
    localidad: ['', Validators.required],
    genero: ['', Validators.required]
    
  });

*/

}
