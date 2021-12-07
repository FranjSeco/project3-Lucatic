import { Component, OnInit, NgZone } from '@angular/core';

import { AuthService } from '../../services/auth.service';

import { TakeUsersService } from '../../services/take-users.service';
import { LikesService } from 'src/app/services/likes.service';

import { Router, ActivatedRoute } from '@angular/router';

import { UserInterface } from '../../model/user-interface';
import { NumberFormatStyle } from '@angular/common';
import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  Yo: UserInterface;

  user!: UserInterface;
  perfil!: any;
  perfiles!: any;
  PersonaVisualizada: UserInterface;

  VerDetalles: Boolean;
  VerIcons: Boolean;

  constructor(
    private authservicio: AuthService,
    private router: Router,
    private ngZone: NgZone,
    private cogerUsuarios: TakeUsersService,
    private addLike: LikesService
  ) {
   
    this.PersonaVisualizada = {} as UserInterface;
    this.VerDetalles = false;
    this.VerIcons = true;
    this.Yo = {} as UserInterface;
   
  }

  ngOnInit(): void {
    this.getAllUsers();
    this.VerDetalles = false;
  }

  getRandom() {
    // this.perfil = Math.floor(Math.random() * (this.perfiles.length + 1));
    // console.log(this.perfil);
    // return this.perfil;

    let numero = Math.floor(Math.random() * this.perfiles.length);
    //console.log(numero);
    //console.log(this.perfiles.length);
    return numero;
  }

  
  BuscarmeAmi() {
    let miNumero = 0;
    for (let i = 0; i < this.perfiles.length; i++) {
      if (this.perfiles[i]._id == localStorage.getItem('id')) {
        this.Yo = this.perfiles[i];
        miNumero = i;
      }
    }
    return miNumero;
  }

  
  BuscarID(id: string) {
    let perfilBuscado!: UserInterface;
    for (let i = 0; i < this.perfiles.length; i++) {
      if (this.perfiles[i]._id == id) {
        this.Yo = this.perfiles[i];
        perfilBuscado = this.perfiles[i];
      }
    }
    return perfilBuscado;
  }

  darLike() {
    if(this.UsuariosSinVer()==false){
    this.BuscarmeAmi();
    this.matches();
    this.Yo.likesDado?.push(this.user._id + '');
    this.user?.likeRecivido?.push(this.Yo._id+"");

    this.authservicio.updateUser(this.Yo._id, this.Yo).subscribe(
      () => {
        //console.log('Like dado');
        this.ngZone.run(() => this.router.navigateByUrl('/updateUser'));
      },
      (err) => {
        console.log(err);
      }
    );
console.log( this.user)
    this.authservicio.updateUser(this.user._id, this.user).subscribe(
      () => {
        console.log('holi');
        this.ngZone.run(() => this.router.navigateByUrl('/updateUser'));
      },
      (err) => {
        console.log(err);
      }
    );

   
    //window.location.reload();
  }
  else{

  }
  }

  darDislike() {
    if(this.UsuariosSinVer()==false){
    this.BuscarmeAmi();
    this.Yo.dislikeDado?.push(this.user._id + '');
    //console.log(this.Yo);

    this.authservicio.updateUser(this.Yo._id, this.Yo).subscribe(
      () => {
        //console.log('dislike dado');
        this.ngZone.run(() => this.router.navigateByUrl('/updateUser'));
      },
      (err) => {
        //console.log(err);
      }
    );
 
    window.location.reload();
    }
    else{

    }
  }

  getAllUsers() {
    this.cogerUsuarios.getAllUsers().subscribe((res) => {
     

      this.perfiles = res;
      let miNumero = this.BuscarmeAmi();

      if(this.UsuariosSinVer()==true){
        this.user={
          name: "No te quedan Usuarios",
          email: "caca@gmail.com",
          password: "12345",
          genero: "Vuelve mas tarde",
          edad: '404',
          foto: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
              
        };
      } 
     else{
//no salir nosotros y no repetidos
    let repetido:boolean=true;
     let numeroRandom = this.getRandom();

    
     while (numeroRandom == miNumero || repetido == true) {
        numeroRandom = this.getRandom();
        this.perfiles[numeroRandom];
      
        repetido=this.BuscarUsuariosVistos( this.perfiles[numeroRandom]._id);
        
      }
      
      this.user = this.perfiles[numeroRandom];
    }
    });
  }


BuscarUsuariosVistos(id:string){
 let repetido:boolean=false;
 

if(this.Yo.likesDado?.length!== undefined ){
 
for(let i=0;  i<this.Yo.likesDado?.length;i++ ){
 

  if(this.Yo.likesDado[i]==id){
    repetido=true;
  
   
  }
}
}

if(this.Yo.dislikeDado?.length!== undefined ){
  
for(let i=0; i <this.Yo.dislikeDado?.length;i++ ){
  if(this.Yo.dislikeDado[i]==id){
    repetido=true;
  
  }


}
}
return repetido;

}


UsuariosSinVer(){
  let contador=1;
  let noQuedan=false;
  
  for(let i=0;i<this.perfiles.length;i++){
    
  if((this.BuscarUsuariosVistos(this.perfiles[i]._id))==true){
  contador++;
  
  }
  
  }
  if(contador==this.perfiles.length){
noQuedan=true;
  }
console.log(contador-this.perfiles.length)
  return noQuedan;
}

matches(){
if(this.Yo.likesDado?.length!== undefined && this.Yo.likeRecivido?.length!== undefined){

for(let i=0; i<this.Yo.likesDado?.length;i++){
for(let j=0;j <this.Yo.likeRecivido?.length;j++){




if(this.Yo.likesDado[i]==this.Yo.likeRecivido[j]){
  let matchAnterior=false;
  if(this.Yo.match?.length!== undefined){


for(let k=0;k<this.Yo.match?.length;k++){
  if(this.Yo.match[k]==this.Yo.likesDado[i]){
    matchAnterior=true;
  }
}

  }
  if(matchAnterior==false){

    this.Yo.match?.push(this.Yo.likesDado[i]);
  
  }

}

}

}
}


}



  verDetalles() {
    if (this.VerDetalles == false) {
      this.VerDetalles = true;
    } else {
      this.VerDetalles = false;
    }
  }

  verIcons() {
    if (this.VerIcons == false) {
      this.VerIcons = true;
    } else {
      this.VerIcons = false;
    }
  }
}
