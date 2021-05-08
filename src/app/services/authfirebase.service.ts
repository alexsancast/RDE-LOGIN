import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthfirebaseService {

  constructor( public prueba: AngularFireAuthModule ) { }

  loginfirebase()
  {
    
  }
}
