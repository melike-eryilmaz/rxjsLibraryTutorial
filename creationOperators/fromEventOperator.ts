import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { defer, fromEvent, Observable } from 'rxjs';
import { from } from 'rxjs';
import {of,interval, timer, range} from 'rxjs';
import {ajax} from 'rxjs/ajax';


@Component({
  selector: 'app-root',
  template: `<button #btn type="button">fromevent7-click</button>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angularDirectiveProject';
  constructor(){}
       /**
         * fromEvent Operator
         * Bir eventi yakalar ve onu observable nesnesine dönüştürür.
         * mouse tıklanması,combobox açılması,bir elementin üzerine gelinmesi gibi işlemlerde kullanılabilir.
         * Angularda rxjs kütüphanesi built-in olarak gelmektedir.
         * #btn diyerek butona referans verdik .Bu referans ile butonun attribute larına html de erişebiliriz.{{btn.target}} gibi..
         * Aynı zamanda typescriptde de bu referansla buton ile işlemler gerçekleştirebiliriz.
         * Decarator:İlgili class veya nesnede yapısında değişiklikler yapmadan ilgili nesneye ek özellikler kazandırmamızı sağlar.
         * Decarator lar her zaman @ işareti ile başlar.
         * AfterviewInit:viewler oluştuktan sonra çalışan methoddur.
         * ngOnInit: Componentin  oluşma anında çalışan lifecycle hook tur.
         * constuructor içerisinde ajax istekleri vs yazılmamalıdır.ngOnInit de yapılması daha doğrudur.
         * html tarafında değişiklikler için ngAfterviewInit ile yapılmalıdır.
         *fromEvent operatörü iki parametre alır : hangi nesne üzerinde eventi kullanacaksın ve eventin ne ?(nesne,event)
         * 
         */
  @ViewChild("btn")
  button:ElementRef;
  ngAfterViewInit(){
    fromEvent(this.button.nativeElement,"click").subscribe(
      data=>{console.log("fromevent",data)}
    );


  }
  stop(){
    this.subscription.unsubscribe();
  }
}
