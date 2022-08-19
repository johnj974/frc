import { Injectable } from '@angular/core';
import { ResourceModel } from '../models/resource.model';

@Injectable({
  providedIn: 'root',
})
export class ResourcesService {
  //.
  resourceArray: ResourceModel[] = [
    new ResourceModel(
      'bi bi-calendar-event',
      'Rental Facilities',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, autplaceat alias excepturi quia harum suscipit? Voluptatem magni sinttempora.',
      'facilities'
    ),
    new ResourceModel(
      'bi bi-box',
      'Classes',
      'Autplaceat alias excepturi quia harum suscipit? Voluptatem magni sinttempora, Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, medi ',
      'classes'
    ),
    new ResourceModel(
      'bi bi-clipboard',
      'Services',
      'Sed, autplaceat alias excepturi quia harum suscipit?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem magni sinttempora.',
      'services'
    ),
  ];

  retrieveResourceArray() {
    return this.resourceArray.slice();
  }

  retrieveSingleResource(id: number) {
    return this.resourceArray[id];
  }

  constructor() {}
}
