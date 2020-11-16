import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsSideBarService , GamesMenuItem } from './items-side-bar.service';
import { ProfesionalesComponent } from './../../profesionales.component';

@Component({
  selector: 'app-items-side-bar',
  templateUrl: './items-side-bar.component.html',
  styleUrls: ['./items-side-bar.component.css']
})
export class ItemsSideBarComponent implements OnInit {

  menuItems: Observable<GamesMenuItem[]>;

  constructor(
    private layoutGamesService: ItemsSideBarService,
    private prof: ProfesionalesComponent
    ) { }

  closeNav(){
    this.prof.closeNav();
  }

  ngOnInit(): void {
    this.menuItems = this.layoutGamesService.getGamesMenuItems();
  }

}
