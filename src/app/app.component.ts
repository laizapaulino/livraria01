import { Component, Inject } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'livraria';
  menu = 'Home'
  public data:any=[]


  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
     
  }
  saveInLocal(key:any, val:any): void {
    console.log('recieved= key:' + key + 'value:' + val);
    this.storage.set(key, val);
    this.data[key]= this.storage.get(key);
   }
   getFromLocal(key:any): void {
    console.log('recieved= key:' + key);
    this.data[key]= this.storage.get(key);
    console.log(this.data);
   }

  private cookieValue: string;

  //constructor(priva)
}
