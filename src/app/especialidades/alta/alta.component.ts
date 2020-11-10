import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent {

  @Output() enviarIngrediente = new EventEmitter();

  itemForm = new FormGroup({
    nombre: new FormControl(''),
  });

  constructor( ) { }

  public async enviaItem() {
    const { nombre } = this.itemForm.value;
    this.enviarIngrediente.emit({ nombre });
  }

}
