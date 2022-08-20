import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  classGoals:string[];

  constructor(
    private route: ActivatedRoute,
    private classesService: ClassesService
  ) {}

  ngOnInit(): void {
    this.classSubscription = this.route.params.subscribe((params: Params) => {
      this.classId = params.id;
      this.chosenClass = this.classesService.retrieveSingleClass(this.classId);
      this.classGoals = this.chosenClass.goal;
    });
  }

  ngOnDestroy(): void {
    this.classSubscription.unsubscribe();
  }
}
