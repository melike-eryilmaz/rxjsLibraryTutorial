import { Component } from '@angular/core';
import {of} from 'rxjs'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(){
    //of operatörü içerisine verdiğimiz değerleri bir observable olarak döner.Subscribe olup değerleri okuyabiliriz.
    const values = of("Melike",[1,2,3],45,4.54);
    values.subscribe(data=>{
      console.log(data)
    })

    
}

