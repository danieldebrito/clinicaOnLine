import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/users/_class/user';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input() items: User[] = [];
  @Output() enviarItem = new EventEmitter();

  constructor() { }

  public enviarDeleteItem(item){
    this.enviarItem.emit({ item });
  }

  ngOnInit(): void {
  }
}
