import { Component, OnInit,NgZone } from '@angular/core';

import{AuthService} from "../../services/auth.service";

import{TakeUsersService} from "../../services/take-users.service";


import { Router, ActivatedRoute } from '@angular/router';

import{ UserInterface } from"../../model/user-interface";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

Yo:UserInterface={
  
  name: ""+localStorage.getItem("name"),
  email: ""+localStorage.getItem("email"),
  password:""+localStorage.getItem("password"),
  genero: ""+localStorage.getItem("genero"),
}; 

PersonaVisualizada:UserInterface;
    



  constructor(private authservicio:AuthService, private router:Router, private ngZone:NgZone, private cogerUsuarios:TakeUsersService) { 
    //recoger id de la persona visualizada
    this.PersonaVisualizada = {} as UserInterface  ;
  
 
   }




  ngOnInit(): void {
  }


  darLike(){
    //coger el atributo de likes dados de yo
    this.Yo.likesDado?.push(/*id de la otra persona*/);
    this.authservicio.updateUser(localStorage.getItem("id"),this.Yo).subscribe(
      () => {
        console.log('Like dado');
        this.ngZone.run(() => this.router.navigateByUrl('/updateUser'));
        
      },
      (err) => {
        console.log(err);
      }
    );
    //coger el atributos de likes recividos de yo
    this.PersonaVisualizada.likesRecivido?.push(localStorage.getItem("id")+"");

      this.PersonaVisualizada.likesRecivido?.push(/*id de Yo*/);
    this.authservicio.updateUser(localStorage.getItem("id"),this.PersonaVisualizada).subscribe(
      () => {
        console.log('Like dado');
        this.ngZone.run(() => this.router.navigateByUrl('/updateUser'));
        
      },
      (err) => {
        console.log(err);
      }
    );
//coger el atributos de likes recividos de yo
    this.Yo.likesDado?.push(/*id de la otra persona*/);
    this.authservicio.updateUser(localStorage.getItem("id"),this.Yo).subscribe(
      () => {
        console.log('Like dado');
        this.ngZone.run(() => this.router.navigateByUrl('/updateUser'));
        
      },
      (err) => {
        console.log(err);
      }
    );

  }

  darDislike(){


  }

}
