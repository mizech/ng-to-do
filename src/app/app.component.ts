import { Component } from '@angular/core';
import { Task } from './Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "To Do List";

  reactToEvent() {
    console.log("Parent reaction");
    alert("Parent has reacted to Event!");
  }
}

