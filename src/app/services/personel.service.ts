import { Injectable } from '@angular/core';
import { PersonelModel } from '../models/personel.model';

@Injectable({
  providedIn: 'root',
})
export class PersonelService {
  //.

  managementArray: PersonelModel[] = [
    new PersonelModel('Nina Samone', 'Chairperson', 'profile'),
    new PersonelModel('Gwen Steffani', 'Secretary', 'profile2'),
    new PersonelModel('Andrea Corr', 'Treasurer', 'profile3'),
    new PersonelModel('Janice Jones', 'Director', 'profile4'),
  ];

  // Photo profile by Vince Veras @ unsplash
  // Photo profile2 by Christopher Campbell @ unsplash
  // Photo profile3 by May Gauthier @ unsplash
  // Photo profile4 by Edward Cisneros @ unsplash

  centrePersonelArray: PersonelModel[] = [
    new PersonelModel('Tom Smith', 'Centre Manager', 'profile1'),
    new PersonelModel('Mary Browne', 'Office Manager', 'profile2'),
    new PersonelModel('Louise McSharry', 'Childcare Manager', 'profile3'),
  ];

  retrieveManagementArray() {
    return this.managementArray.slice();
  }

  retieveCentrePersonelArray() {
    return this.centrePersonelArray.slice();
  }

  constructor() {}
}
