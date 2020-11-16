import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/users/_class/user';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() user: User = {};

  constructor() { }

  ngOnInit(): void {
  }

}
