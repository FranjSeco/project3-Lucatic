import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ProyectoFinal';

  constructor(private router: Router) {
    this.isUser();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }

  isUser() {
    // console.log(localStorage);
    if (localStorage.length > 0) {
      this.router.navigate(['/display']);
    } else {
      // console.log('The user needs to login manually.');
    }
  }
}
