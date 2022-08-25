import { Injectable } from '@angular/core';
import { FacilityModel } from '../models/facility.model';

@Injectable({
  providedIn: 'root',
})
export class FacilitiesService {
  //.

  facilitiesArray: FacilityModel[] = [
    new FacilityModel('Meeting Room 1', 'a pitch', 'room1', 10, '1hr', 5),
    new FacilityModel('Meeting Room 2', 'a pitch', 'room2', 10, '1hr', 5),
    new FacilityModel('Astro Turf Pitch', 'a pitch', 'pitch', 10, '1hr', 5),
    new FacilityModel('Community Hall', 'a pitch', 'hall', 10, '1hr', 5),
    new FacilityModel('Community Stage', 'a pitch', 'stage', 10, '1hr', 5),
  ];

  retrieveFacilities() {
    return this.facilitiesArray.slice();
  }

  constructor() {}
}

// pitch by Nathan Rogers
// room1 by Pawel Chu
// room2 by SOCIAL.CUT
// hall by Patrick Schopflin
// stage by Stefano Stocchini
