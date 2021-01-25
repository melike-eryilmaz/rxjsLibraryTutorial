import { Component } from '@angular/core';
import {of,interval, timer} from 'rxjs'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscription;
  constructor(){
    /**
     * timer operator:
     * Bir işlemi belli bir süre sonra yaptırmak için kullanılır.
     * ms cinsinden değerler alır.
     * Sadece bir kez çalışır.
     */
    const timers = timer(2000);
    /**
     *   timer(5000,2000) 5 SN sonra her 2 sn de bir data yayar.
     * Bir interval gibi kullanılabilir.Farkı kaç saniye sonra başlayacağını verebiliriz.
     */
  
    this.subscription=timers.subscribe(
      val=>{
        console.log("Bu blok 2 sn sonra çalışcaktır.")
      },
      err=>{},
      () =>{
        console.log("Veri alma işlemi tamamlandı.")
      }
      )
  }
  stop(){
    this.subscription.unsubscribe();
  }
}
