import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-timetable-stud',
  templateUrl: 'timetable-stud.html',
})
export class TimetableStudPage {
  days:any;
  @ViewChild('slider') slider: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.days = this.navParams.get('days');
  }
  ngAfterViewInit() {
    this.slider.autoHeight = true;
  }
}
