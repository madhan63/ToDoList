import { Component } from '@angular/core';
import {Todo} from "./todo";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolist';
  todoValue:string;
  list:Todo[];
  ngOnInit()
  {
    this.list=[];
    this.todoValue="";
  }
  addTodo()
  {
    if(this.todoValue!=="")
    {
      const v:Todo={
        id:Date.now(),
        value:this.todoValue,
        isDone:false
      };
      this.list.push(v);
    }
    this.todoValue=""; 
  }
  delete(id:number)
  {
    this.list=this.list.filter(item=>item.id!=id);
  }

}
