import { Component, OnInit } from '@angular/core';
import { TakeUsersService } from 'src/app/services/take-users.service';
import { AuthService } from '../../services/auth.service';
import { NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from '../../model/user-interface';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  Yo!: UserInterface;
  likesLista: UserInterface[] = [];
  dislikedUsers: UserInterface[] = [];
  matchLista: UserInterface[] = [];
  perfiles!: any;
  name!: any;
  matches!: any;
  funciona!: false;

  VerPopUp: Boolean;

  constructor(
    private authservicio: AuthService,
    private router: Router,
    private ngZone: NgZone,
    private cogerUsuarios: TakeUsersService
  ) {
    this.VerPopUp = false;
  }

  ngOnInit(): void {
    this.name = localStorage.getItem('name');

    this.getAllUsers();

    //this.findLikes();
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
        this.findMatches();
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
      this.perfiles = res;
      this.findDislikes();
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
    // console.log(this.likesLista);
  }

  findMatches() {
    this.BuscarrmeAmi(localStorage.getItem('id') + '');

    let todosarray!: any;
    todosarray = this.Yo.match;

    for (let index = 0; index < todosarray.length; index++) {
      this.matchLista[index] = this.BuscarrmeAmi(todosarray[index]);
    }
    console.log(this.matchLista);
  }

  verPopUp() {
    if (this.VerPopUp == false) {
      this.VerPopUp = true;
      let module = <HTMLElement>document.getElementById('module');
      module.style.filter = 'blur(2px)';
      let getGold = <HTMLElement>document.getElementById('getGold');
      getGold.style.cursor = 'default';
    } else {
      this.VerPopUp = false;
      let module = <HTMLElement>document.getElementById('module');
      module.style.filter = 'blur(0px)';
    }
  }

  findDislikes() {
    const myId = localStorage.getItem('id');

    const dislikesLista = this.perfiles.find((item: any) => {
      return item._id == myId;
    }).dislikeDado;

    this.dislikedUsers = this.perfiles.filter(({ _id }: any) =>
      dislikesLista.includes(_id)
    );
  }
}
