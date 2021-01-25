import { Component } from '@angular/core';
import {of,interval, timer, range} from 'rxjs'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularDirectiveProject';
  isSpecial:boolean=true;
  subscription;
  constructor(){
    /**
       * Range() operator
       * İki tane parametre alır.Bu parametre arasında değer yayar.
       * Timer ve intervalden farkı anlık olarak sn bekletmeden yayar.
       * range(1,20)
       * 
       */
      const publisher = range(1,20);
      this.subscription= publisher.subscribe(
        val =>{
          console.log("gelen deger=" +val);
        },
        err =>{},
        ()=>{
          console.log("veri alma işlemi tamamlandı.");
          //Servisten veri aldığımız zamanlarda tüm datanın gelme işlemi tamamlandığında burada datayı yazdırıp ne geldiğini görebiliriz.
        }
      );

  }
  stop(){
    this.subscription.unsubscribe();
  }
}
