import { Component } from '@angular/core';
import { usuario } from '../models/task.interface';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  

  constructor( public firestore : TodoService) {}
  nombre1:string;
  apellido2:string;
  edad2:number;

  login(){
  
    
    
    const path = "/usuario"
    const usuario :usuario = {
      nombre:this.nombre1,
      apellido:this.apellido2,
      edad:this.edad2
    };

    this.firestore.createDocument<usuario>(usuario,path).then(res => console.log(res))
  }

}
