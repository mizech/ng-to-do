import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskListComponent } from './task-list.component';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDatepickerModule,
    FormsModule
  ],
  exports: [
    TaskListComponent
  ]
})
export class TasksModule { }
