import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-senior',
  templateUrl: './home-senior.component.html',
  styleUrls: ['./home-senior.component.scss'],
})
export class HomeSeniorComponent implements OnInit {
  //.

  toSeniors() {
    console.log('navigate to seniors page');
  }

  constructor() {}

  ngOnInit(): void {}
}
