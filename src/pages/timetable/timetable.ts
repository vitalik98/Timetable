import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from "@angular/core";
import { Slides } from "ionic-angular";

/**
 * Generated class for the TimetablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimetablePage');
  }
  ngAfterViewInit() {
    this.slider.autoHeight = true;
  }
}
