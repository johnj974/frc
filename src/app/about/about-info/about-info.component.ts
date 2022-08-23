import { Component, OnInit } from '@angular/core';
import { PersonelModel } from 'src/app/models/personel.model';
import { PersonelService } from 'src/app/services/personel.service';

@Component({
  selector: 'app-about-info',
  templateUrl: './about-info.component.html',
  styleUrls: ['./about-info.component.scss'],
})
export class AboutInfoComponent implements OnInit {
  //.
  managementPersonel: PersonelModel[];
  centrePersonel: PersonelModel[];

  constructor(private personelService: PersonelService) {}

  ngOnInit(): void {
    this.managementPersonel = this.personelService.retrieveManagementArray();
    this.centrePersonel = this.personelService.retieveCentrePersonelArray();
  }
}
