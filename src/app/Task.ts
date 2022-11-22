export class Task {
    constructor(public title: string, public isDone = false) {}

    toogleIsDone() {
        this.isDone = !this.isDone;
      }
}