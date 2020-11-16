import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.css']
})
export class ProfesionalesComponent implements OnInit {

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
