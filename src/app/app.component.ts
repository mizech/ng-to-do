import { Component } from '@angular/core';
import { Task } from './Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "To Do List";
  tasks : Task[] = [
    new Task("Visit Ann", false),
    new Task("Call Dad", false),
    new Task("Wash the dishes", false),
    new Task("Shop for the party", false),
    new Task("Read some book", false),
    new Task("Go for a run", false)
  ];

  add(newTask: string) {
    this.tasks.push(new Task(newTask));
  }

  remove(index: number) {
    var userConfirm = confirm(`Do you want to remove the following task: ${this.tasks[index].title}`);

    if (!userConfirm) {
      return;
    }

    this.tasks.splice(index, 1);
  }
}

