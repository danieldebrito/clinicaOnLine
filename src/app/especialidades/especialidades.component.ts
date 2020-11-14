import { Component, OnInit } from '@angular/core';
import { EspecialidadesService } from './especialidades.service';
import { Especialidad } from './components/_class/especialidad';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css']
})
export class EspecialidadesComponent implements OnInit {

  public especialidades: Especialidad[] = [];

  constructor(private EspecialidadesSrv: EspecialidadesService) { }

  public addMateria(item) {
    console.log(item);
    this.EspecialidadesSrv.addItem(item);
  }

  public updateMateria(item) {
    // clave a modificar
    this.EspecialidadesSrv.updateItem(item);
  }

  public deleteMateria(event) {
    this.EspecialidadesSrv.deleteItem(event.item);
  }

  public async getItems() {
    (await this.EspecialidadesSrv.getItems()).subscribe(elements => {
      this.especialidades = elements;
    });
  }

  ngOnInit(): void {
    this.getItems();
   }
}
