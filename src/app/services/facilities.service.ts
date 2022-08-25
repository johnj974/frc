import { Injectable } from '@angular/core';
import { FacilityModel } from '../models/facility.model';

@Injectable({
  providedIn: 'root',
})
export class FacilitiesService {
  //.

  facilitiesArray: FacilityModel[] = [
    new FacilityModel('Astro Turf Pitch', 'a pitch', 'image1', 10, '1hr', 5),
    new FacilityModel('Meeting Room 1', 'a pitch', 'image1', 10, '1hr', 5),
    new FacilityModel('Meeting Room 2', 'a pitch', 'image1', 10, '1hr', 5),
    new FacilityModel('Community Hall', 'a pitch', 'image1', 10, '1hr', 5),
    new FacilityModel('Community Stage', 'a pitch', 'image1', 10, '1hr', 5),
  ];

  constructor() {}
}
