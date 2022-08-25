import { Component, OnInit } from '@angular/core';
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

  constructor(private facilitiesService: FacilitiesService) {}

  ngOnInit(): void {
    this.facilitesAvailable = this.facilitiesService.retrieveFacilities();
  }
}
