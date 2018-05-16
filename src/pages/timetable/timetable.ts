import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from "@angular/core";
import { Slides } from "ionic-angular";

@IonicPage()
@Component({
  selector: 'page-timetable',
  templateUrl: 'timetable.html',
})
export class TimetablePage {
  @ViewChild('slider') slider: Slides;
  weekParity = true;
  weekEven = 'чёт.';
  weekOdd = 'нечёт.';
  weekState = 'чёт.';
  days;
  subjects;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.days = this.navParams.data.days;
    this.subjects = this.navParams.data.days.subjects;
  }

  switchWeek(){
    this.weekParity = !this.weekParity;
    if(this.weekParity){
      this.weekState = this.weekEven;
    }
    else {
      this.weekState = this.weekOdd;
    }
  }

  ngAfterViewInit() {
    this.slider.autoHeight = true;
  }
}
