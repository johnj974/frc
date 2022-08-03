import { Component, OnInit } from '@angular/core';
import { ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  //.
  availableClasses = [];

  constructor(private classeService: ClassesService) {}

  ngOnInit(): void {
    this.availableClasses = this.classeService.classesAvailableArray;
  }
}
