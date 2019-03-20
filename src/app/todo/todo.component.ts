import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TodoDataService} from '../service/data/todo-data.service';
import {Todo} from '../list-todos/list-todos.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(
    private todoService: TodoDataService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());
    if (this.id != -1) {
      this.todoService.getTodoById('Marczu', this.id).subscribe(
        data => this.todo = data
      );
    }
  }

  saveTodo(id: number, todo: Todo) {
    if (this.id === -1) {
      this.todoService.createTodo('Marczu', todo).subscribe(
        response => {
          this.route.navigate(['/todos']);

        });
    } else {
      this.todoService.updateTodo('Marczu', id, todo).subscribe(
        response => {
          this.route.navigate(['/todos']);

        });
    }
  }
}
