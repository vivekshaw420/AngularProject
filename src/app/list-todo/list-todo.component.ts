import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/todo-data.service';



export class Todo {

  constructor(public id: number, public description: string,
              public done: boolean,public targetDate: Date) {}

  
      }

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  constructor(private  dataservice: TodoDataService) { }

   todos:Todo[];

  ngOnInit() {
    console.log("getAllDetails123");
    this.getAllDetails();

  }

  getAllDetails()
  {
    console.log("getAllDetails");
    //let username = sessionStorage.getItem("username");
    this.dataservice.getAllDetails("in28minutes").subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id)
  {
    this.dataservice.deleteTodo("in28minutes" , id).subscribe(

      response =>{
        console.log("delete" + id);
        this.getAllDetails();
      }
    )

   // this.getAllDetails();
  }

}
