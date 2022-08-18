import { Component, OnInit } from '@angular/core';
import { OffersModel } from 'src/app/models/offers.model';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-resources-display',
  templateUrl: './resources-display.component.html',
  styleUrls: ['./resources-display.component.scss'],
})
export class ResourcesDisplayComponent implements OnInit {
  //.
  servicesProvidedArray: OffersModel[];

  toPage(link: string) {
    console.log(link);
  }

  constructor(private offersService: OffersService) {}

  ngOnInit(): void {
    this.servicesProvidedArray = this.offersService.retrieveOffersArray();
  }
}
