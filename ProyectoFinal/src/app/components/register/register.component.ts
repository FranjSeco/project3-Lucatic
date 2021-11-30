import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { User } from '../../model/user-interface';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
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
      password: this.password,
    };

    console.log(newUser);
    this.onAddUser.emit(newUser);
    // this.name = '';
    // this.genero = '';
    // this.email = '';
    // this.password = NaN;
    this.register(newUser);
  }

  register(user: User) {
    this.auth.register(user);
  }
}
