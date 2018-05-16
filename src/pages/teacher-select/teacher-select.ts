import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
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
@IonicPage()
@Component({
  selector: 'page-teacher-select',
  templateUrl: 'teacher-select.html'
})
export class TeacherSelectPage {
  teachers: Teacher[];
  days;
  teacherBuf:Teacher[];
  constructor(public navCtrl: NavController, public navParams: NavParams/*, public JsonP: JsonProvider*/) {
    this.teachers = this.navParams.get('teachers');
    this.teacherBuf = this.navParams.get('teachers');
  }
  showTimetable(days) {
    this.navCtrl.push(TimetablePage, {days: days})
  }
  getItems(ev: any) {
    let val = ev.target.value;
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
