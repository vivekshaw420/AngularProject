import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../list-todo/list-todo.component';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {



  constructor(private http : HttpClient) { }



  getAllDetails(username)
  {
    console.log("data get details ");
  // return  this.http.get<Todo[]>(`http//:localhost:8090/users/${username}/todos`);
   return this.http.get<Todo[]>(`http://localhost:8090/users/${username}/todos`);

  }

  deleteTodo(username,id)
  {
    return this.http.delete(`http://localhost:8090/users/${username}/todos/${id}`);
  }




  
}
