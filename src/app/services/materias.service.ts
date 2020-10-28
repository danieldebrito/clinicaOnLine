import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Materia } from 'src/app/class/materia';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  ItemsCollection: AngularFirestoreCollection<Materia>;
  ItemDoc: AngularFirestoreDocument<Materia>;
  Items: Observable<Materia[]>;

  public cantCarritoItems: number;

  constructor(public db: AngularFirestore) {
    this.ItemsCollection = this.db.collection('materias');
    this.Items = this.ItemsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Materia;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  public getItems() {
    return this.Items;
  }

  public deleteItem(Item: Materia) {
    this.ItemDoc = this.db.doc(`materias/${Item.id}`);
    this.ItemDoc.delete();
  }

  public addItem(Item: Materia) {
    this.ItemsCollection.add(Item);
  }

  public updateItem(Item: Materia) {
    this.ItemDoc = this.db.doc(`materias/${Item.id}`);
    this.ItemDoc.update(Item);
  }

}
