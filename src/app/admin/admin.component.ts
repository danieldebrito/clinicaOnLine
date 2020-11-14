import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  public openNav() {
    document.getElementById('mySidenav').style.width = '350px';
    document.getElementById('main').style.marginLeft = '350px';
    // this.listar();
  }

  public closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    // this.listar();
  }

  ngOnInit(): void {
  }

}
