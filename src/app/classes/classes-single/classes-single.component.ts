import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClassModel } from 'src/app/models/class.model';
import { ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-classes-single',
  templateUrl: './classes-single.component.html',
  styleUrls: ['./classes-single.component.scss'],
})
export class ClassesSingleComponent implements OnInit, OnDestroy {
  //.

  chosenClass: ClassModel;
  classId: number;
  classSubscription: Subscription;
  classGoals: string[];
  classesArray: ClassModel[];
  disableNextButton = false;
  disablePrevButton = false;

  toNextClass() {
    console.log(this.classId++);
    let nextClass = this.classId++;
    let newClass = this.classesService.retrieveSingleClass(nextClass);
    let className = newClass.name.replace(/ /g, '');
    this.router.navigate(['/classes', nextClass, className]);
    if (nextClass >= this.classesArray.length - 1) {
      this.disableNextButton = true;
    }
  }

  toPreviousClass() {
    console.log(this.classId--);
    let prevClass = this.classId--;
    let newClass = this.classesService.retrieveSingleClass(prevClass);
    let className = newClass.name.replace(/ /g, '');
    this.router.navigate(['/classes', prevClass, className]);
    if (prevClass >= this.classesArray.length - 1) {
      this.disablePrevButton = true;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private classesService: ClassesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.classSubscription = this.route.params.subscribe((params: Params) => {
      this.classId = params.id;
      this.chosenClass = this.classesService.retrieveSingleClass(this.classId);
      this.classGoals = this.chosenClass.goal;
      this.classesArray = this.classesService.retrieveClassArray();
    });
  }

  ngOnDestroy(): void {
    this.classSubscription.unsubscribe();
  }
}
