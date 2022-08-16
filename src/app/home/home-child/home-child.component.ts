import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.scss'],
})
export class HomeChildComponent implements OnInit {
  //.

  toChildcare() {
    console.log('this will go to childcare page');
  }

  constructor() {}

  ngOnInit(): void {}
}
