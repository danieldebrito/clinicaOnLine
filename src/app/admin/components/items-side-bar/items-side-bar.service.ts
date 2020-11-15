import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface GamesMenuItem {
  redirectTo: string;
  name: string;
  img: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemsSideBarService {

  constructor( private http: HttpClient ) { }

  getGamesMenuItems(): any{
    return this.http.get<GamesMenuItem[]>('/assets/menus/adminSidebar/items-menu.json');
  }
}
