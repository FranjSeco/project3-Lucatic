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
  Yo: UserInterface = {
    name: '' + localStorage.getItem('name'),
    email: '' + localStorage.getItem('email'),
    password: '' + localStorage.getItem('password'),
    genero: '' + localStorage.getItem('genero'),
  };

  user!: UserInterface;
  perfil!: any;
  perfiles!: any;
  PersonaVisualizada: UserInterface;

  constructor(
    private authservicio: AuthService,
    private router: Router,
    private ngZone: NgZone,
    private cogerUsuarios: TakeUsersService,
    private addLike: LikesService
  ) {
    //recoger id de la persona visualizada
    this.PersonaVisualizada = {} as UserInterface;
  }

  ngOnInit(): void {
    this.getAllUsers();
    // this.getOneUser();
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

  // getOneUser() {
  //   this.cogerUsuarios.getAllUsers().subscribe(() => {
  //     //console.log(res);
  //     // this.perfiles[this.getRandom()] = res;
  //     //console.log(this.perfiles[this.getRandom()]);
  //     this.user = this.perfiles[this.getRandom()];
  //   });
  // }

  // darLike() {
  //   //coger el atributo de likes dados de yo
  //   this.Yo.likesDado?.push(/*id de la otra persona*/);
  //   this.authservicio.updateUser(localStorage.getItem('id'), this.Yo).subscribe(
  //     () => {
  //       console.log('Like dado');
  //       this.ngZone.run(() => this.router.navigateByUrl('/updateUser'));
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  //   //coger el atributos de likes recividos de yo
  //   this.PersonaVisualizada.likesRecivido?.push(
  //     localStorage.getItem('id') + ''
  //   );

  //   this.PersonaVisualizada.likesRecivido?.push(/*id de Yo*/);
  //   this.authservicio
  //     .updateUser(localStorage.getItem('id'), this.PersonaVisualizada)
  //     .subscribe(
  //       () => {
  //         console.log('Like dado');
  //         this.ngZone.run(() => this.router.navigateByUrl('/updateUser'));
  //       },
  //       (err) => {
  //         console.log(err);
  //       }
  //     );
  //   //coger el atributos de likes recividos de yo
  //   this.Yo.likesDado?.push(/*id de la otra persona*/);
  //   this.authservicio.updateUser(localStorage.getItem('id'), this.Yo).subscribe(
  //     () => {
  //       console.log('Like dado');
  //       this.ngZone.run(() => this.router.navigateByUrl('/updateUser'));
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }

  darDislike() {}

  getAllUsers() {
    this.cogerUsuarios.getAllUsers().subscribe((res) => {
      //console.log(res);
      this.perfiles = res;
      this.user = this.perfiles[this.getRandom()];
      console.log(this.user);
    });
  }
}
