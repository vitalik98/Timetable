import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimetableStudPage } from './timetable-stud';

@NgModule({
  declarations: [
    TimetableStudPage,
  ],
  imports: [
    IonicPageModule.forChild(TimetableStudPage),
  ],
})
export class TimetableStudPageModule {}
