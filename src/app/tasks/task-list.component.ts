import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../Task';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NewTask } from './new-task.dto';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  taskService = new TaskService();
  tasks = this.taskService.getAllTasks();

  newTask: NewTask = new NewTask();

  ngOnInit(): void {
    var strDate = this.route.snapshot.params["date"];
    this.newTask = new NewTask(this.newTask.title, new Date(strDate));
  }

  add(taskNgForm: NgForm) {
    if (taskNgForm.touched == false) {
      return;
    }

    if (taskNgForm.valid == false) {
      return;
    }

    this.taskService.addTask(this.newTask);
    taskNgForm.reset({date: this.newTask.date});
  }

  remove(index: number) {}
}


