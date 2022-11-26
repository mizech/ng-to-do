import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../Task';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }
  date: Date = new Date();
  newTaskTitle = "";

  ngOnInit(): void {
    this.date = new Date(this.route.snapshot.params["date"]);
    console.log(this.date);
  }
  
  tasks : Task[] = [
    new Task("Visit Ann", false),
    new Task("Call Dad", false),
    new Task("Wash the dishes", false),
    new Task("Shop for the party", false),
    new Task("Read some book", false),
    new Task("Go for a run", false)
  ];

  add(taskNgForm: NgForm) {
    if (taskNgForm.touched == false) {
      return;
    }

    if (taskNgForm.valid == false) {
      return;
    }

    this.tasks.push(new Task(this.newTaskTitle));
    taskNgForm.reset({date: this.date});
  }

  remove(index: number) {
    var userConfirm = confirm(`Do you want to remove the following task: ${this.tasks[index].title}`);

    if (!userConfirm) {
      return;
    }

    this.tasks.splice(index, 1);
  }
}
