import { Component } from '@angular/core';
import {interval} from 'rxjs'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscription;
  constructor(){
    //interval operatörü verilen ms cinsinden her zaman aralığında bir değer yayınlar.İşlem unsubscribe olana kadar devam eder.
    //next ile bir sonraki data
    //error ile yayılan hata 
    //complete tamamlanınca 
    const publisher = interval(1000)
    publisher.subscribe(
      val=>{console.log("example"+val)},
      err=>{},
      ()=>{
        console.log("veri alma işlemi tamamlandı.")//Bu method bu işlem her 1 sn de bir tekrarlandığı için şuanda çalışmaz.
    }
    //unsubscribe olunca bu işlem tamamlanır.
    //her 1 sn de bir değer yayınlar.unsubscribe olana kadar sürer.
    )
    
  }
  stop(){
    this.subscription.unsubscribe();
  }
}
