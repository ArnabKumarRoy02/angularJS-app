import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoItem: string = '';
  
  listofTodos: string[] = [];

  addToTodolist = () => {
    console.log("clicked")
    this.listofTodos.push(this.todoItem);
  }

  deleteItem = (indexofTheItem: number) => {
    console.log(indexofTheItem);
    this.listofTodos.splice(indexofTheItem, 1);
  }

}
