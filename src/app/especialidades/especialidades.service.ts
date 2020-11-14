import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Especialidad } from './components/_class/especialidad';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  ItemsCollection: AngularFirestoreCollection<Especialidad>;
  ItemDoc: AngularFirestoreDocument<Especialidad>;
  Items: Observable<Especialidad[]>;

  constructor(public db: AngularFirestore) {
    this.ItemsCollection = this.db.collection('especialidades');
    this.Items = this.ItemsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Especialidad;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  public getItems() {
    return this.Items;
  }

  public deleteItem(Item: Especialidad) {
    this.ItemDoc = this.db.doc(`especialidades/${Item.id}`);
    this.ItemDoc.delete();
  }

  public addItem(Item: Especialidad) {
    this.ItemsCollection.add(Item);
  }

  public updateItem(Item: Especialidad) {
    this.ItemDoc = this.db.doc(`especialidades/${Item.id}`);
    this.ItemDoc.update(Item);
  }
}
