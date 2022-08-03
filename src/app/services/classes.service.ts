import { Injectable } from '@angular/core';
import { ClassModel } from '../models/class.model';

@Injectable({
  providedIn: 'root',
})
export class ClassesService {
  //.

  classesAvailableArray: ClassModel[] = [
    new ClassModel('Art', 'An art class', 'Tuesday', '9.00am - 11.00am', [
      'To encourage art',
      'To draw stuff',
      'Social interaction',
      'To colour stuff',
    ]),
    new ClassModel(
      'Photography',
      'Take photos',
      'Wednesday',
      '7.00pm - 9.00pm',
      ['To take pictures', 'Social', 'Artistic', 'To Learn about cameras']
    ),
    new ClassModel('First Aid', 'Do first aid', 'Friday', '7.00pm - 9.00pm', [
      'To practice first aid',
      'Social',
      'To assess danger',
      'To save lives',
    ]),
  ];
  constructor() {}
}
