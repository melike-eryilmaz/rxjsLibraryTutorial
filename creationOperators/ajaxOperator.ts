import { Component } from '@angular/core';
import {ajax} from 'rxjs/ajax';

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
         * Bir apiden istek yapmak istek sonrası gelen datayı observable olarak almamızı sağlar.
         * İçerisinde method tipi ,url gibi ekstra attribute tanımlanabilir.
         * Jquery deki ajax isteğine benzer ama direkt observable döndüğü ve callback leri olduğu için daha avantajlıdır.
         */
        ajax.getJSON("https://jsonplaceholder.typicode.com/posts").subscribe(
          data=>{console.table(data)},
          err => {},
          ()=>{console.log("Veri alma işlemi tamamlandı.")}
        
        );

  }
  stop(){
    this.subscription.unsubscribe();
  }
}
