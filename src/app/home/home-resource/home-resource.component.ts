import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-home-resource',
  templateUrl: './home-resource.component.html',
  styleUrls: ['./home-resource.component.scss'],
})
export class HomeResourceComponent implements OnInit {
  //.
  resourcesList = [];
  constructor(
    private resourcesService: ResourcesService,
    private router: Router
  ) {}

  toPage(page: string) {
    console.log(page);
    this.router.navigate([`/${page}`]);
  }

  ngOnInit(): void {
    this.resourcesList = this.resourcesService.retrieveResourceArray();
  }
}
