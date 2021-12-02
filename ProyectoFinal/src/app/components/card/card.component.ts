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

  VerDetalles:Boolean;



  constructor(
    private authservicio: AuthService,
    private router: Router,
    private ngZone: NgZone,
    private cogerUsuarios: TakeUsersService,
    private addLike: LikesService
  ) {
    //recoger id de la persona visualizada
    this.PersonaVisualizada = {} as UserInterface;
    this.VerDetalles=false;
    this.Yo= {} as UserInterface;
    console.log(this.Yo+"Holis");
  }

  ngOnInit(): void {
    this.getAllUsers();
    this.VerDetalles=false;
 

  }

  getRandom() {
    // this.perfil = Math.floor(Math.random() * (this.perfiles.length + 1));
    // console.log(this.perfil);
    // return this.perfil;

    let numero = Math.floor(Math.random() * (this.perfiles.length));
    console.log(numero);
    console.log(this.perfiles.length);
    return numero;
  }

  likes() {

      // this.addLike.likes().subscribe(() => {
    // })
    //this.getRandom();
  
  }


  BuscarrmeAmi(){
    let miNumero=0;
for(let i=0;i<this.perfiles.length;i++){

if(  this.perfiles[i]._id==localStorage.getItem('id')){
 

this.Yo=this.perfiles[i];
miNumero=i;
}

}
  return miNumero;

  }


  darLike() {
    this.BuscarrmeAmi();
   this.Yo.likesDado?.push(this.user._id+"");
console.log(this.Yo);

this.authservicio.updateUser(this.Yo._id, this.Yo).subscribe(
  () => {
    console.log('Like dado');
    this.ngZone.run(() => this.router.navigateByUrl('/updateUser'));
  },
  (err) => {
    console.log(err);
  }
);

  }


  darDislike() {
    this.BuscarrmeAmi();
    this.Yo.dislikeDado?.push(this.user._id+"");
 console.log(this.Yo);
 
 this.authservicio.updateUser(this.Yo._id, this.Yo).subscribe(
   () => {
     console.log('dislike dado');
     this.ngZone.run(() => this.router.navigateByUrl('/updateUser'));
   },
   (err) => {
     console.log(err);
   }
 );


  }

  getAllUsers() {
    this.cogerUsuarios.getAllUsers().subscribe((res) => {
      //console.log(res);
      
      this.perfiles = res;
      let miNumero= this.BuscarrmeAmi();
  
      let numeroRandom=this.getRandom();
      while(numeroRandom==miNumero){
       numeroRandom=this.getRandom();
      }
   
      this.user = this.perfiles[numeroRandom];
      console.log(this.user);
    });
  }

  verDetalles(){


    if(this.VerDetalles==false){
      this.VerDetalles=true;
    }
    else{
      this.VerDetalles=false;
    }

  }


}
