import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.scss'],
})
export class HomeChildComponent implements OnInit {
  //.

  toChildcare() {
    this.router.navigate(['/childcare']);
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
