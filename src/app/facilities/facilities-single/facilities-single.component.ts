import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FacilityModel } from 'src/app/models/facility.model';
import { FacilitiesService } from 'src/app/services/facilities.service';

@Component({
  selector: 'app-facilities-single',
  templateUrl: './facilities-single.component.html',
  styleUrls: ['./facilities-single.component.scss'],
})
export class FacilitiesSingleComponent implements OnInit {
  //.

  facility: FacilityModel;

  constructor(
    private route: ActivatedRoute,
    private facilitiesService: FacilitiesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.facility = this.facilitiesService.retrieveSingleFacility(param.id);
    });
  }
}
