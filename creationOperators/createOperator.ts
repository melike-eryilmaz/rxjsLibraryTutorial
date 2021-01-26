import { Component } from '@angular/core';
import {Observable } from 'rxjs';


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
         * create Operator observable nesnesi oluşturmak için kullanılır.
         *create opertorü şuanda kullanımdan kalkmıştır.Onun yerine new Observable() deyimiyle observable oluşturabiliriz.
         * İçerisinde observable nesnesinin hangi verileri döneceği belirtilir.
         */
        const myobservable = new Observable(subscriber => {
          subscriber.next(1);
          subscriber.next(2);
          subscriber.next(3);
          subscriber.complete();
        });
        this.subscription=myobservable.subscribe(
          data=>{console.log(data)},
          err=>{},
          ()=>{console.log("Veri alma işlemi tamamlandı.")}
        );

  }
  stop(){
    this.subscription.unsubscribe();
  }
}
