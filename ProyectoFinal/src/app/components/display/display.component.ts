import { Component, OnInit } from '@angular/core';
import { TakeUsersService } from 'src/app/services/take-users.service';
import { NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  db: any[] = [];
  constructor(
    private take: TakeUsersService,
    private ngZone: NgZone,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  switchWindow(window: string) {
    console.log(event?.target);
    let option = document.getElementById(window);
    let firstHr = <HTMLElement>document.getElementById('iMatch');
    let secondHr = <HTMLElement>document.getElementById('iMess');
    let thirdHr = <HTMLElement>document.getElementById('iLike');
    let fourthHr = <HTMLElement>document.getElementById('iDis');
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

        break;

      default:
        break;
    }
    let options = ['matches', 'messages', ''];
  }

  getAllUsers() {
    this.take.getAllUsers().subscribe((data: any) => {
      this.db = data;
      console.log(this.db);
      this.ngZone.run(() => this.router.navigateByUrl('/adduser'));
    });
  }
}
