import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {JsonProvider} from "../../providers/json/json";
import {TimetablePage} from "../timetable/timetable";

export class Teacher {
  name: string;
  days: Day;
}

export class Day {
  dayN: string;
  subjects: Subject;
}

export class Subject {
  time: string;
  subject: string;
  course: number;
  group: number;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  teachers: Teacher[];
  days;
  teacherBuf:Teacher[];
  constructor(public navCtrl: NavController, public JsonP: JsonProvider) {
  }

  showTimetable(days) {
    this.navCtrl.push(TimetablePage, {days: days})
  }

  ionViewDidLoad() {
    this.JsonP.getData().subscribe(data => this.teachers = data['teachers']);
    this.JsonP.getData().subscribe(data => this.teacherBuf = data['teachers']);
    this.JsonP.getData().subscribe(data => console.log("!!!", data));
  }
  getItems(ev: any) {
    let val = ev.target.value;
    console.log(val);
    if (val == '' || val == null || val == undefined) {
      this.teacherBuf = this.teachers;
    }
    else {
      this.teacherBuf = this.teachers.filter((teacher) => {
        return (teacher.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
