import { Component, OnInit } from '@angular/core';
import { TakeUsersService } from 'src/app/services/take-users.service';
import { NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  db: any;
  constructor(
    private take: TakeUsersService,
    private ngZone: NgZone,
    private router: Router
  ) {}

  ngOnInit(): void {}

  switchWindow() {
    console.log(event?.target);
    let option = <HTMLElement>document.getElementById('matches');
    option.style.borderBottom = '4px solid #FF5B6C';
  }

  getAllUsers() {
    this.take.getAllUsers().subscribe((data: any) => {
      this.db = data;
      console.log(this.db);
      this.ngZone.run(() => this.router.navigateByUrl('/display'));
    });
  }
}
