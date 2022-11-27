import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { NewTask } from './new-task.dto';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  tasks : Task[] = [
    new Task("Visit Ann", false),
    new Task("Call Dad", false),
    new Task("Wash the dishes", false),
    new Task("Shop for the party", false),
    new Task("Read some book", false),
    new Task("Go for a run", false)
  ];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  addTask(newTask: NewTask) {
    this.tasks.push(new Task(newTask.title));
  }

  removeTask(existingTask: Task) {}
}
