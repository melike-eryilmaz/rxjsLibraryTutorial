import { Component } from '@angular/core';
import { from } from 'rxjs';
import {of,interval, timer, range} from 'rxjs'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscription;
  constructor(){
      /**
       * from Operator
       * Of dan farklı olarak içerisine bir dizi alır ve geriye bir observable nesneye dönüştürüp döner.
       */
      const map = new Map();
      map.set(1,"Kitaplar");
      map.set(2,"Kalemler");
      map.set(3,"Silgiler");

      const publisher = from(map);
      this.subscription = publisher.subscribe(
        val =>{
          console.log(`${val}`);
          console.log(`${val[0]}=${val[1]}`);//value dan gelen 1. ve 2. değerleri al.

        },
        err =>{},
        ()=>{
          console.log("veri alma işlemi tamamlandı.");
        }

      )

  }
  stop(){
    this.subscription.unsubscribe();
  }
}
