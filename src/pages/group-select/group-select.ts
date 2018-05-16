import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TimetableStudPage} from "../timetable-stud/timetable-stud";

/**
 * Generated class for the GroupSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-group-select',
  templateUrl: 'group-select.html',
})
export class GroupSelectPage {
  groups:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.groups = this.navParams.get('groups');
  }
  showStudTimetable(days){
    this.navCtrl.push(TimetableStudPage,{days:days});
  }
}
