import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherSelectPage } from './teacher-select';

@NgModule({
  declarations: [
    TeacherSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherSelectPage),
  ],
})
export class TeacherSelectPageModule {}
