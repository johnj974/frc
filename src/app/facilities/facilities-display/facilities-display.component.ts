import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacilityModel } from 'src/app/models/facility.model';
import { FacilitiesService } from 'src/app/services/facilities.service';

@Component({
  selector: 'app-facilities-display',
  templateUrl: './facilities-display.component.html',
  styleUrls: ['./facilities-display.component.scss'],
})
export class FacilitiesDisplayComponent implements OnInit {
  //.

  facilitesAvailable: FacilityModel[];

  // changeClass() {
  //   console.log('Change the class for an overlay');
  // }

  // changeClassBack() {
  //   console.log('change the class back');
  // }

  toFacilityPage(id: number, name: string) {
    console.log(id, name);
    let facilityName = name.replace(/ /g, '');
    this.router.navigate(['/facilities', id, facilityName]);
  }

  constructor(
    private facilitiesService: FacilitiesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.facilitesAvailable = this.facilitiesService.retrieveFacilities();
  }
}
