import { Component, OnInit } from '@angular/core';
import { NgZone } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email!: string;
  password: any;
  constructor(
    private auth: AuthService,
    private ngZone: NgZone,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    console.log(this.email, this.password);
    this.auth.login(this.email, this.password).subscribe(
      (data: any) => {
        console.log(data.userID, 'this is login');
        localStorage.setItem('id', data.userID);
        this.ngZone.run(() => this.router.navigateByUrl('/login'));
      },
      (err) => {
        console.log(err);
      }
    );
    console.log(localStorage);
  }
}
