import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './../auth/usuarios.service';
import { User } from './_class/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: User[] = [];
  public user: User = {};

  constructor(private UsuariosSrv: UsuariosService) { }

  public addMateria(item) {
    console.log(item);
    this.UsuariosSrv.addItem(item);
  }

  public updateMateria(item) {
    // clave a modificar
    this.UsuariosSrv.updateItem(item);
  }

  public deleteMateria(event) {
    this.UsuariosSrv.deleteItem(event.item);
  }

  public mostrarItem(event){
    this.user = event.item;
  }

  public async getItems() {
    (await this.UsuariosSrv.getItems()).subscribe(elements => {
      this.users = elements;
    });
  }

  ngOnInit(): void {
    this.getItems();
   }
}
