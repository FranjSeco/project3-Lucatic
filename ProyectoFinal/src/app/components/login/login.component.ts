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
    this.auth.login(this.email, this.password).subscribe(
      (data: any) => {
        console.log(data, 'this is data');
        localStorage.setItem('id', data._id);
        localStorage.setItem('name', data.name);
        localStorage.setItem('email', data.email);
        this.ngZone.run(() => this.router.navigateByUrl('/login'));
        this.router.navigate(['/display']);
      },
      (err) => {
        console.log(err, 'error');
        alert('Usuario o contraseña equivocados');
      }
    );
    console.log(localStorage);
  }
}
