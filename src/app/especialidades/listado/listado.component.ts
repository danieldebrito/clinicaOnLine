import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Especialidad } from './../_class/especialidad';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input() especialidades: Especialidad[] = [];
  @Output() enviarIdIngrediente = new EventEmitter();

  constructor() { }

  public enviarDeleteItem(item){
    this.enviarIdIngrediente.emit({ item });
  }

  ngOnInit(): void {
  }

}
