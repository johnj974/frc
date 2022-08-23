import { Injectable } from '@angular/core';
import { PersonelModel } from '../models/personel.model';

@Injectable({
  providedIn: 'root',
})
export class PersonelService {
  //.

  managementArray: PersonelModel[] = [
    new PersonelModel('Tom Smith', 'Chairperson', 'profile'),
    new PersonelModel('Tom Smith', 'Secretary', 'profile'),
    new PersonelModel('Tom Smith', 'Treasurer', 'profile'),
    new PersonelModel('Tom Smith', 'Director', 'profile'),
  ];

  centrePersonelArray: PersonelModel[] = [
    new PersonelModel('Mary Browne', 'Centre Manager', 'profile'),
    new PersonelModel('Mary Browne', 'Office Manager', 'profile'),
    new PersonelModel('Mary Browne', 'Childcare Manager', 'profile'),
  ];

  retrieveManagementArray() {
    return this.managementArray.slice();
  }

  retieveCentrePersonelArray() {
    return this.centrePersonelArray.slice();
  }

  constructor() {}
}
