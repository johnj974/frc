import { Component, OnInit } from '@angular/core';
import { PersonelModel } from 'src/app/models/personel.model';
import { PersonelService } from 'src/app/services/personel.service';

@Component({
  selector: 'app-about-team',
  templateUrl: './about-team.component.html',
  styleUrls: ['./about-team.component.scss'],
})
export class AboutTeamComponent implements OnInit {
  //.

  managementTeam: PersonelModel[];

  constructor(private personelService: PersonelService) {}

  ngOnInit(): void {
    this.managementTeam = this.personelService.retrieveManagementArray();
  }
}
