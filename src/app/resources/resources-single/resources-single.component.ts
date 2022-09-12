import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OffersModel } from 'src/app/models/offers.model';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-resources-single',
  templateUrl: './resources-single.component.html',
  styleUrls: ['./resources-single.component.scss'],
})
export class ResourcesSingleComponent implements OnInit, OnDestroy {
  //.

  singleService: OffersModel;
  serviceId: number;
  serviceSubscription: Subscription;

  toContact() {
    this.router.navigate(['contact']);
  }

  constructor(
    private offersService: OffersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.serviceSubscription = this.route.params.subscribe((params: Params) => {
      this.serviceId = +params.id;
      this.singleService = this.offersService.retrieveSingleOffer(
        this.serviceId
      );
    });
  }

  ngOnDestroy(): void {
    this.serviceSubscription.unsubscribe();
  }
}
