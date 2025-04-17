import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todolist',
  imports: [FormsModule,NgIf],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
})
export class TodolistComponent{
  task='';
  editId:any;
  show=false;
  tasksList:{id:number,task:string, check:boolean}[]=[];

  constructor(private toastr: ToastrService){};

 

  addtask(){
    if(this.task===''){
      this.toastr.show('Enter the task!');
    }else{
    this.tasksList.push({id : this.tasksList.length+1, task:this.task, check:true  });
    this.task="";
    console.log(this.tasksList);
    }
  }
  deletTask(taskId:number){
    this.tasksList = this.tasksList.filter((item)=> item.id!=taskId);
    console.log(this.tasksList);

  }
  editTask(taskId:number){
    this.task=this.tasksList[taskId].task;
    this.editId=taskId;
    this.show=true;
  } 
  updateTask(){
    if(this.task===''){
      this.task=this.tasksList[this.editId].task;
    }else{
      this.tasksList[this.editId].task=this.task;
    }
    this.tasksList[this.editId].check=true;
    this.task='';
    this.editId='';
    this.show=false;
    console.log(this.tasksList);
  }
  checkTask(taskId:number){
    this.tasksList[taskId].check=false;

  }

}
