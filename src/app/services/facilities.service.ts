import { Injectable } from '@angular/core';
import { FacilityModel } from '../models/facility.model';

@Injectable({
  providedIn: 'root',
})
export class FacilitiesService {
  //.

  facilitiesArray: FacilityModel[] = [
    new FacilityModel(
      'Meeting Room 1',
      `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
        consequatur labore qui nobis necessitatibus libero, explicabo, voluptate
        ducimus neque porro magni odit repudiandae expedita id voluptatibus
        adipisci quo! Ut, dicta. Sunt commodi maiores, maxime sapiente inventore
        eos sed? Exercitationem illum itaque modi magni! Debitis vero ullam
        culpa quia repellendus voluptates.`,
      'room1',
      10,
      '1hr',
      5
    ),
    new FacilityModel(
      'Meeting Room 2',
      `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
        consequatur labore qui nobis necessitatibus libero, explicabo, voluptate
        ducimus neque porro magni odit repudiandae expedita id voluptatibus
        adipisci quo! Ut, dicta. Sunt commodi maiores, maxime sapiente inventore
        eos sed? Exercitationem illum itaque modi magni! Debitis vero ullam
        culpa quia repellendus voluptates.`,
      'room2',
      10,
      '1hr',
      5
    ),
    new FacilityModel(
      'Astro Turf Pitch',
      `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
        consequatur labore qui nobis necessitatibus libero, explicabo, voluptate
        ducimus neque porro magni odit repudiandae expedita id voluptatibus
        adipisci quo! Ut, dicta. Sunt commodi maiores, maxime sapiente inventore
        eos sed? Exercitationem illum itaque modi magni! Debitis vero ullam
        culpa quia repellendus voluptates.`,
      'pitch',
      10,
      '1hr',
      5
    ),
    new FacilityModel(
      'Community Hall',
      `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
        consequatur labore qui nobis necessitatibus libero, explicabo, voluptate
        ducimus neque porro magni odit repudiandae expedita id voluptatibus
        adipisci quo! Ut, dicta. Sunt commodi maiores, maxime sapiente inventore
        eos sed? Exercitationem illum itaque modi magni! Debitis vero ullam
        culpa quia repellendus voluptates.`,
      'hall',
      10,
      '1hr',
      5
    ),
    new FacilityModel(
      'Community Stage',
      `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
        consequatur labore qui nobis necessitatibus libero, explicabo, voluptate
        ducimus neque porro magni odit repudiandae expedita id voluptatibus
        adipisci quo! Ut, dicta. Sunt commodi maiores, maxime sapiente inventore
        eos sed? Exercitationem illum itaque modi magni! Debitis vero ullam
        culpa quia repellendus voluptates.`,
      'stage',
      10,
      '1hr',
      5
    ),
  ];

  retrieveFacilities() {
    return this.facilitiesArray.slice();
  }

  retrieveSingleFacility(id: number) {
    return this.facilitiesArray[id];
  }

  constructor() {}
}

// pitch by Nathan Rogers
// room1 by Pawel Chu
// room2 by SOCIAL.CUT
// hall by Patrick Schopflin
// stage by Stefano Stocchini
