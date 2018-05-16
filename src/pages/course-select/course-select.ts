import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {JsonProvider} from "../../providers/json/json";
import {GroupSelectPage} from "../group-select/group-select";

@IonicPage()
@Component({
  selector: 'page-course-select',
  templateUrl: 'course-select.html',
})
export class CourseSelectPage {
  courses;
  groups;
  constructor(public navCtrl: NavController, public navParams: NavParams, public JsonP: JsonProvider) {
    this.courses = this.navParams.get('courses');
  }
  showGroups(groups){
    this.navCtrl.push(GroupSelectPage,{groups:groups});
  }
}
