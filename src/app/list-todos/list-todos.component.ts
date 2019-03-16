import { Component, OnInit } from '@angular/core';

export class Todo {

  constructor(
    public id: number,
    public description: string,
    public isDone: boolean,
    public targetDate: Date
    ){
  }



}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1,  'Nauczyć się pływać', false, new Date()),
    new Todo(2,  'Iść na spacer', false, new Date()),
    new Todo(3,  'Zjeść kolacje', false, new Date())
  ];


  constructor() { }

  ngOnInit() {
  }

}
