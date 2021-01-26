import { Component } from '@angular/core';
import { defer } from 'rxjs';
import { from } from 'rxjs';
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
       * defer Operator
       * Defer içersinde bir tarih nesnesi oluşturulur.
       * subscribe olunca o andaki tarih bilgisini almamızı sağlar.
       * Aşağıdaki örnekte of ile alınan tarih subscribe olduğu tarih  olurken defer ile subscribe olduktan 3 sn sonraki tarih yani o andaki tarih alınır.
       */
      const publisher = of(new Date());
      const publisher2 = defer(()=>of(new Date()));
      const mytimer = timer(3000);
      this.subscription = mytimer.subscribe(data=>
        {
          publisher.subscribe(val=>console.log("Of dan gelen tarih:",val));
          publisher2.subscribe(val2=>console.log("defer den gelen tarih:",val2));
        }
        )
  }
  stop(){
    this.subscription.unsubscribe();
  }
}
