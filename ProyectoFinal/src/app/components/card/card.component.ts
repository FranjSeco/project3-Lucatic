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

  constructor(
    private authservicio: AuthService,
    private router: Router,
    private ngZone: NgZone,
    private cogerUsuarios: TakeUsersService,
    private addLike: LikesService
  ) {
   
    this.PersonaVisualizada = {} as UserInterface;
    this.VerDetalles = false;
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

  likes() {
    // this.addLike.likes().subscribe(() => {
    // })
    //this.getRandom();
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
    this.BuscarmeAmi();
    this.Yo.likesDado?.push(this.user._id + '');
    //console.log(this.Yo);

    this.authservicio.updateUser(this.Yo._id, this.Yo).subscribe(
      () => {
        //console.log('Like dado');
        this.ngZone.run(() => this.router.navigateByUrl('/updateUser'));
      },
      (err) => {
        //console.log(err);
      }
    );
  
    this.getAllUsers();
  }

  darDislike() {
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
 
    this.getAllUsers();
  }

  getAllUsers() {
    this.cogerUsuarios.getAllUsers().subscribe((res) => {
      //console.log(res);

      this.perfiles = res;
      let miNumero = this.BuscarmeAmi();

      let repetido:boolean=true;
     
//no salir nosotros y no repetidos
      let numeroRandom = this.getRandom();
      while (numeroRandom == miNumero || repetido == true) {
        numeroRandom = this.getRandom();
        this.perfiles[numeroRandom];
      
        repetido=this.BuscarUsuariosVistos( this.perfiles[numeroRandom]._id);
        
      }
      
      this.user = this.perfiles[numeroRandom];
      //console.log(this.user);
    });
  }


BuscarUsuariosVistos(id:string){
 let repetido:boolean=false;
 

if(this.Yo.likesDado?.length!== undefined ){
  //console.log(id);
for(let i=0;  i<this.Yo.likesDado?.length;i++ ){
 
  console.log(this.Yo.likesDado[i]);
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




  verDetalles() {
    if (this.VerDetalles == false) {
      this.VerDetalles = true;
    } else {
      this.VerDetalles = false;
    }
  }
}
