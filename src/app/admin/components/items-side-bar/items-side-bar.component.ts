import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsSideBarService , GamesMenuItem } from './items-side-bar.service';

@Component({
  selector: 'app-items-side-bar',
  templateUrl: './items-side-bar.component.html',
  styleUrls: ['./items-side-bar.component.css']
})
export class ItemsSideBarComponent implements OnInit {

  menuItems: Observable<GamesMenuItem[]>;

  constructor( private layoutGamesService: ItemsSideBarService) { }

  ngOnInit(): void {
    this.menuItems = this.layoutGamesService.getGamesMenuItems();
  }

}
