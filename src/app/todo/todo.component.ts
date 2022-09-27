import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }
  username: string = "hello";

  get userName(): string {
    return this.username;
  }

  set userName(val: string) {
    this.username = val;
  }

  ngOnInit(): void {
  }

}
