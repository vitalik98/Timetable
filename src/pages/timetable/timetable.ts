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
  days;
  subjects;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.days = this.navParams.data.days;
    this.subjects = this.navParams.data.days.subjects;
  }

  ngAfterViewInit() {
    this.slider.autoHeight = true;
  }
}
