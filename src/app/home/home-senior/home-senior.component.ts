import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-senior',
  templateUrl: './home-senior.component.html',
  styleUrls: ['./home-senior.component.scss'],
})
export class HomeSeniorComponent implements OnInit {
  //.

  toSeniors() {
    this.router.navigate(['/seniors']);
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
