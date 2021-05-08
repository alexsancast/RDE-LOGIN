import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule,AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore} from '@angular/fire/firestore'; 


@Injectable({
  providedIn: 'root'
})
export class TodoService {


  constructor( private FireStore: AngularFirestore) { }

  createDocument<tipo>(data: tipo, enlace:string)
  {
    const userColletion:AngularFirestoreCollection<tipo> =
                        this.FireStore.collection<tipo>(enlace);
                        return userColletion.add(data);   
          
    
  }

  createDocId(){
    return this.FireStore.createId
  }
}
