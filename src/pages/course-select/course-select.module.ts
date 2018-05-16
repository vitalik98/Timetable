import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourseSelectPage } from './course-select';

@NgModule({
  declarations: [
    CourseSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(CourseSelectPage),
  ],
})
export class CourseSelectPageModule {}
