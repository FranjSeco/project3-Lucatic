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
  perfiles!: any;
  matches!: any;
  constructor(
    private authservicio: AuthService,
    private router: Router,
    private ngZone: NgZone,
    private cogerUsuarios: TakeUsersService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.likesLista;
  }

  ngOnInit(): void {
    this.getAllUsers();
    this.findLikes();
  }

  switchWindow(window: string) {
    let option = document.getElementById(window);
    let firstHr = <HTMLElement>document.getElementById('iMatch');
    let secondHr = <HTMLElement>document.getElementById('iMess');
    let thirdHr = <HTMLElement>document.getElementById('iLike');
    let fourthHr = <HTMLElement>document.getElementById('iDis');
    let messList = <HTMLElement>document.getElementById('messList');
    let likeList = <HTMLElement>document.getElementById('likeList');
    console.log(option);
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

        messList.style.translate = '100%';
        likeList.style.translate = '100%';
        dislikeList.style.translate = '100%';
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

        messList.style.translate = '0';
        likeList.style.translate = '100%';
        dislikeList.style.translate = '100%';
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

        messList.style.translate = '100%';
        likeList.style.translate = '0';
        dislikeList.style.translate = '100%';

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

        messList.style.translate = '100%';
        likeList.style.translate = '100%';
        dislikeList.style.translate = '0';
        break;

      default:
        break;
    }
  }

  getAllUsers() {
    this.cogerUsuarios.getAllUsers().subscribe((res) => {
      //console.log(res);

      this.perfiles = res;

      console.log(this.perfiles);
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

  async findLikes() {
    this.BuscarrmeAmi(localStorage.getItem('id') + '');

    let todosarray!: any;
    todosarray = this.Yo.likesDado;
    console.log(todosarray);

    for (let index = 0; index < todosarray.length; index++) {
      this.likesLista[index] = this.BuscarrmeAmi(todosarray[index]);
    }
    console.log(this.likesLista);
  }
}
