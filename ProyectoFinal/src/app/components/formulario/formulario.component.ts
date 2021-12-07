import { Component, OnInit,NgZone } from '@angular/core';
//import{DatosPersonales} from"../../model/datos-personales"

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

import { FormsModule } from '@angular/forms';


import{AuthService} from "../../services/auth.service";

import{UserInterface} from"../../model/user-interface";



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {


  datosPrevios:UserInterface;
  datosPersonales:UserInterface;

  constructor(private formBuilder:FormBuilder, private from: FormsModule,private servicio:AuthService, private ngZone:NgZone,private activatedRoute: ActivatedRoute,private router: Router,) {
    
  this.datosPersonales = {} as UserInterface  ;

  this.datosPrevios=  {
    
    name: ""+localStorage.getItem("name"),
    email: ""+localStorage.getItem("email"),
    password:""+localStorage.getItem("password"),
    genero: ""+localStorage.getItem("genero"),
    foto: ""+localStorage.getItem("foto"),
  }

     }

  ngOnInit(): void {
   
  }

  agregarDatosPersonales(): any{
    
this.servicio.updateUser(localStorage.getItem("id"),this.datosPersonales).subscribe(
  () => {
    console.log('Data updated successfully!');
    this.ngZone.run(() => this.router.navigateByUrl('/updateUser'));
  },
  (err) => {
    console.log(err);
  }
);
if(this.datosPersonales.name!=undefined){
localStorage.setItem("name",this.datosPersonales.name+"");
}
this.datosPersonales = {} as UserInterface  ;
  
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
