import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  switchWindow() {
    console.log(event?.target);
    let option = <HTMLElement>document.getElementById('matches');
    option.style.borderBottom = '4px solid #FF5B6C';
  }
}
