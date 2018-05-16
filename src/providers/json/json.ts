import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class JsonProvider {
  myurl:string='https://radiant-lowlands-37036.herokuapp.com/';
  constructor(public http: HttpClient) {

  }
  getData(){
    return this.http.get(this.myurl);
  }
}
