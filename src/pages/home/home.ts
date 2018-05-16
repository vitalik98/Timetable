import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TeacherSelectPage} from "../teacher-select/teacher-select";
import {CourseSelectPage} from "../course-select/course-select";
import {JsonProvider} from "../../providers/json/json";
import {Storage} from "@ionic/storage";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  courses: any = [];
  teachers: any = [];

  constructor(
    public navCtrl: NavController,
    public JsonP: JsonProvider,
    public storage: Storage,
    public http: HttpClient) {
  }

  toTeacherSelect(teachers) {
    this.navCtrl.push(TeacherSelectPage, {teachers: teachers});
  }

  toCourse(courses) {
    this.navCtrl.push(CourseSelectPage, {courses: courses});
  }

  ionViewWillEnter() {
    this.JsonP.getData().subscribe((data) => {
      this.courses = data['courses'];
      this.teachers = data['teachers'];
    },
      (error) => {
        console.log("Server unavailable! Loading from local storage...");
        this.loadData();
      }
    )
  }

  loadData() {
    this.storage.get('teachers').then((val) => {
      if (val != null && val != undefined) {
        this.teachers = JSON.parse(val);
      }
    });
    this.storage.get('courses').then((val) => {
      if (val != null && val != undefined) {
        this.courses = JSON.parse(val);
      }
    });
    console.log("Data retrieved!");
  }

  saveData() {
    this.storage.set('teachers', JSON.stringify(this.teachers));
    this.storage.set('courses', JSON.stringify(this.courses));
    console.log("Data saved!");
    console.log(this.teachers);
    console.log(this.courses);
  }
}
