import { Component, OnInit } from '@angular/core';
import { TakeUsersService } from 'src/app/services/take-users.service';
import { AuthService } from '../../services/auth.service';
import { NgZone } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { UserInterface } from '../../model/user-interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  Yo!: UserInterface;
  likesLista: UserInterface[] = [];

  matchLista: UserInterface[] = [];
  perfiles!: any;
  name!: any;
  matches!: any;
  funciona!: false;
  constructor(
    private authservicio: AuthService,
    private router: Router,
    private ngZone: NgZone,
    private cogerUsuarios: TakeUsersService
  ) {}

  ngOnInit(): void {
    this.name = localStorage.getItem('name');

    this.getAllUsers();

    this.findLikes();
    console.log(this.likesLista);
  }

  switchWindow(window: string) {
    let option = document.getElementById(window);
    let firstHr = <HTMLElement>document.getElementById('iMatch');
    let secondHr = <HTMLElement>document.getElementById('iMess');
    let thirdHr = <HTMLElement>document.getElementById('iLike');
    let fourthHr = <HTMLElement>document.getElementById('iDis');
    let matchList = <HTMLElement>document.getElementById('matchList');
    let messList = <HTMLElement>document.getElementById('messList');
    let likeList = <HTMLElement>document.getElementById('likeList');
    let dislikeList = <HTMLElement>document.getElementById('dislikeList');
    let hr = <HTMLElement>option?.children.item(1);

    switch (window) {
      case 'matches':
        secondHr.style.opacity = '0';
        thirdHr.style.opacity = '0';
        fourthHr.style.opacity = '0';
        secondHr.style.translate = '-120%';
        thirdHr.style.translate = '-375%';
        fourthHr.style.translate = '-400%';
        hr.style.translate = '0';
        hr.style.opacity = '1';

        matchList.style.translate = '0';
        messList.style.translate = '100%';
        likeList.style.translate = '100%';
        dislikeList.style.translate = '100%';
        this.findLikes();
        break;
      case 'messages':
        firstHr.style.opacity = '0';
        thirdHr.style.opacity = '0';
        fourthHr.style.opacity = '0';
        firstHr.style.translate = '140%';
        thirdHr.style.translate = '-180%';
        fourthHr.style.translate = '-253%';
        hr.style.translate = '0';
        hr.style.opacity = '1';

        matchList.style.translate = '100%';
        messList.style.translate = '0';
        likeList.style.translate = '100%';
        dislikeList.style.translate = '100%';
        this.findLikes();
        break;
      case 'likes':
        firstHr.style.opacity = '0';
        secondHr.style.opacity = '0';
        fourthHr.style.opacity = '0';
        firstHr.style.translate = '250%';
        secondHr.style.translate = '100%';
        fourthHr.style.translate = '-120%';
        hr.style.translate = '0';
        hr.style.opacity = '1';

        matchList.style.translate = '100%';
        messList.style.translate = '100%';
        likeList.style.translate = '0';
        dislikeList.style.translate = '100%';
        this.findLikes();
        break;
      case 'dislikes':
        firstHr.style.opacity = '0';
        secondHr.style.opacity = '0';
        thirdHr.style.opacity = '0';
        firstHr.style.translate = '375%';
        secondHr.style.translate = '200%';
        thirdHr.style.translate = '160%';
        hr.style.translate = '0';
        hr.style.opacity = '1';

        matchList.style.translate = '100%';
        messList.style.translate = '100%';
        likeList.style.translate = '100%';
        dislikeList.style.translate = '0';
        this.findLikes();
        break;

      default:
        break;
    }
  }

  async getAllUsers() {
    this.cogerUsuarios.getAllUsers().subscribe((res) => {
      //console.log(res);

      this.perfiles = res;

      console.log(res);
    });
  }

  BuscarrmeAmi(id: string) {
    let perfilBuscado!: UserInterface;
    for (let i = 0; i < this.perfiles.length; i++) {
      if (this.perfiles[i]._id == id) {
        this.Yo = this.perfiles[i];
        perfilBuscado = this.perfiles[i];
      }
    }
    return perfilBuscado;
  }

  findLikes() {
    this.BuscarrmeAmi(localStorage.getItem('id') + '');

    let todosarray!: any;
    todosarray = this.Yo.likesDado;


    for (let index = 0; index < todosarray.length; index++) {
      this.likesLista[index] = this.BuscarrmeAmi(todosarray[index]);
    }
    console.log(this.likesLista);
  }

findMatches(){

  this.BuscarrmeAmi(localStorage.getItem('id') + '');

  let todosarray!: any;
  todosarray = this.Yo.match;
 

 

  for (let index = 0; index < todosarray.length; index++) {
    this.matchLista[index] = this.BuscarrmeAmi(todosarray[index]);
  }
  console.log(this.matchLista);


}

}
