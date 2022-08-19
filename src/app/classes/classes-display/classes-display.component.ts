import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassModel } from 'src/app/models/class.model';
import { ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-classes-display',
  templateUrl: './classes-display.component.html',
  styleUrls: ['./classes-display.component.scss'],
})
export class ClassesDisplayComponent implements OnInit {
  //.

  availableClasses: ClassModel[];
  constructor(private classesService: ClassesService, private router: Router) {}

  toClassPage(id: number, name: string) {
    console.log(id, name);
  }

  ngOnInit(): void {
    this.availableClasses = this.classesService.retrieveClassArray();
  }
}
