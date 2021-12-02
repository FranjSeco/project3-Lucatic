import { Component, OnInit } from '@angular/core';
import { NgZone } from '@angular/core';
import { UserInterface } from '../../model/user-interface';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
// import { Observable } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  usuario!: UserInterface;
  constructor(
    private auth: AuthService,
    private ngZone: NgZone,
    private router: Router
  ) {
    this.usuario = {} as UserInterface;
  }

  ngOnInit(): void {
    this.usuario = {} as UserInterface;
  }

  addUser() {
    this.auth.adduser(this.usuario).subscribe(
      () => {
        this.ngZone.run(() => this.router.navigateByUrl('/adduser'));
      },
      (err) => {
        alert('Email o password incorrectos!');
        console.log(err);
      }
    );
    console.log(this.usuario);
    this.usuario = {} as UserInterface;
    this.router.navigate(['/login']);
  }
}
