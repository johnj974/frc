import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  toServicePage(id: number, link: string) {
    let serviceName = link.replace(/ /g, '');
    this.router.navigate(['/services', id, serviceName]);
  }

  constructor(private offersService: OffersService, private router: Router) {}

  ngOnInit(): void {
    this.servicesProvidedArray = this.offersService.retrieveOffersArray();
  }
}
