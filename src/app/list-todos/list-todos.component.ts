import {Component, OnInit} from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Router} from '@angular/router';

export class Todo {

  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [];
  message: string;


  constructor(
    private todoDataService: TodoDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.refreshTodos()
  }

  refreshTodos(){
    this.todoDataService.getAllTodos('Marczu').subscribe(
      response => {
        console.log(response);
        this.todos = response;
        console.log(this.todos)
      }
    );
  }

  deleteTodo(id: number) {
    this.todoDataService.deleteTodo("Marczu", id).subscribe(
      response => {
        console.log(response);
        this.message = "Usunieto zadanie o id: " + id
        this.refreshTodos()
      }
    );
  }

  editTodo(id: number) {
    console.log("update " + id)
    this.router.navigate(['todos', id])
  }
}
