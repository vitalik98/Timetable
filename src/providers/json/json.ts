import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the JsonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JsonProvider {
  myurl:string='../assets/timetable.json';
  constructor(public http: HttpClient) {
    //console.log('Hello JsonProvider Provider');
  }
  getData(){
    return this.http.get(this.myurl);
  }
}
