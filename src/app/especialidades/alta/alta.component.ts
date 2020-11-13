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
    nombreEspecialidad: new FormControl(''),
  });

  constructor( ) { }

  public async enviaItem() {
    const { nombreEspecialidad } = this.itemForm.value;
    this.enviarIngrediente.emit({ nombreEspecialidad });
  }

}
