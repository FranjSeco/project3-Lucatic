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

todosPerfiles: any=[];
PersonaVisualizada:UserInterface;


Yo:UserInterface={
  id:   "" +localStorage.getItem("id"),
  name: ""+localStorage.getItem("name"),
  email: ""+localStorage.getItem("email"),
  password:""+localStorage.getItem("password"),
  genero: ""+localStorage.getItem("genero"),
}; 


    
  constructor(private authservicio:AuthService, private router:Router, private ngZone:NgZone, private cogerUsuarios:TakeUsersService) { 
    this.getAllUsers()
    this.PersonaVisualizada = {} as UserInterface  ;
  
   
   }

  


  ngOnInit(): void {
   
 
  }


  darLike(){
    //ejemplo: cambiar luego
    
    this.PersonaVisualizada=this.todosPerfiles[3];

    console.log(this.PersonaVisualizada)

    this.Yo.likesDado?.push(this.PersonaVisualizada.id+"");

    this.authservicio.updateUser(localStorage.getItem("id"),this.Yo).subscribe(
      () => {
        console.log('Like dado');
        this.ngZone.run(() => this.router.navigateByUrl('/updateUser'));
        
      },
      (err) => {
        console.log(err);
      }
    );


   
    this.PersonaVisualizada.likesRecivido?.push(this.Yo.id+"");


    this.authservicio.updateUser(this.PersonaVisualizada.id+"",this.PersonaVisualizada).subscribe(
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


  getAllUsers() {

    this.cogerUsuarios.getAllUsers().subscribe(res=>{ console.log(res)
      this.todosPerfiles=res;} );
    }
 
}
