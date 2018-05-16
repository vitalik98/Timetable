import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TimetablePage } from "../pages/timetable/timetable";
import { TeacherSelectPage } from "../pages/teacher-select/teacher-select";
import {CourseSelectPage} from "../pages/course-select/course-select";
import { HttpClientModule } from "@angular/common/http";
import { JsonProvider } from '../providers/json/json';
import {GroupSelectPage} from "../pages/group-select/group-select";
import {TimetableStudPage} from "../pages/timetable-stud/timetable-stud";
import { IonicStorageModule } from "@ionic/storage";
import { Network } from "@ionic-native/network";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TimetablePage,
    TeacherSelectPage,
    CourseSelectPage,
    GroupSelectPage,
    TimetableStudPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TimetablePage,
    TeacherSelectPage,
    CourseSelectPage,
    GroupSelectPage,
    TimetableStudPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JsonProvider,
    Network
  ]
})
export class AppModule {}
