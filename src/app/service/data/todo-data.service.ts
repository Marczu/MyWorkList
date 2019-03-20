import { Injectable } from '@angular/core';
import {HelloWorldBean} from './welcome-data.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Todo} from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  getAllTodos(username: string){
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  createBasicAuthenticationHttpHeader(){
    let username = "user";
    let password = "password";
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }

  deleteTodo(username: string, id: number){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  getTodoById(username: string, id: number){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  updateTodo(username: string, id: number, todo){
    return this.http.put(
      `http://localhost:8080/users/${username}/todos/${id}`
      , todo);
  }

  createTodo(username: string, todo){
    return this.http.post(
      `http://localhost:8080/users/${username}/todos`
      , todo);
  }
}
