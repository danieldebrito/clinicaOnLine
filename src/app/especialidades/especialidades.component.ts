import { Component, OnInit } from '@angular/core';
import { EspecialidadesService } from './especialidades.service';
import { Especialidad } from './_class/especialidad';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css']
})
export class EspecialidadesComponent implements OnInit {

  public especialidades: Especialidad[] = [];

  constructor(private EspecialidadesSrv: EspecialidadesService) { }

  public addMateria(item) {
    this.EspecialidadesSrv.addItem(item);
  }

  public updateMateria(item) {
    // clave a modificar
    this.EspecialidadesSrv.updateItem(item);
  }

  public deleteMateria(item) {
    this.EspecialidadesSrv.deleteItem(item);
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
