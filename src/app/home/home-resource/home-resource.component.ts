import { Component, OnInit } from '@angular/core';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-home-resource',
  templateUrl: './home-resource.component.html',
  styleUrls: ['./home-resource.component.scss'],
})
export class HomeResourceComponent implements OnInit {
  //.
  resourcesList = [];
  constructor(private resourcesService: ResourcesService) {}

  ngOnInit(): void {
    this.resourcesList = this.resourcesService.resourceArray;
  }
}
