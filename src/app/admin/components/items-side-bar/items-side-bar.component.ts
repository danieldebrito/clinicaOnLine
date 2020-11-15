import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsSideBarService , GamesMenuItem } from './items-side-bar.service';
import { AdminComponent } from './../../admin.component';

@Component({
  selector: 'app-items-side-bar',
  templateUrl: './items-side-bar.component.html',
  styleUrls: ['./items-side-bar.component.css']
})
export class ItemsSideBarComponent implements OnInit {

  menuItems: Observable<GamesMenuItem[]>;

  constructor(
    private layoutGamesService: ItemsSideBarService,
    private adm: AdminComponent
    ) { }

  closeNav(){
    this.adm.closeNav();
  }

  ngOnInit(): void {
    this.menuItems = this.layoutGamesService.getGamesMenuItems();
  }

}
