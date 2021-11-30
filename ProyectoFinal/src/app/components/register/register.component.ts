import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
<<<<<<< HEAD
  @Output() onAddUser: EventEmitter<User> = new EventEmitter();
  name!: string;
  genero!: string;
  email!: string;
  password!: number;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.name) {
      alert('Please add name');
      return;
    }

    const newUser = {
      name: this.name,
      genero: this.genero,
      email: this.email,
      password: 1,
    };
=======
  usuario!: UserInterface;
  constructor(
    private auth: AuthService,
    private ngZone: NgZone,
    private router: Router
  ) {
    this.usuario = {} as UserInterface;
  }
>>>>>>> 523c5388bf5638f60a3d0b74337ce1fe6c2d4e69

  ngOnInit(): void {
    this.usuario = {} as UserInterface;
  }

  addUser() {
    this.auth.adduser(this.usuario).subscribe(
      () => {
        console.log(this.usuario);
        this.ngZone.run(() => this.router.navigateByUrl('/adduser'));
      },
      (err) => {
        console.log(err);
      }
    );

    this.usuario = {} as UserInterface;
  }
}
