import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';



import { addTaskAction, removeTaskAction, updateTaskAction } from '../store/list.actions';
import { Task } from '../store/task.interface'

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})

export class ChecklistComponent implements OnInit {
  
  list: Array<Task>;
  profileForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private store: Store<{ list: Array<Task> }>) {
    this.store.pipe().subscribe(attr => {
      this.list = attr.list;
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if(this.profileForm.value.title){
      this.addTask({
        title : this.profileForm.value.title,
        description: this.profileForm.value.description,
        creationDate : null, // Will be filled by reducer
        id : null, // Will be filled by reducer
        isChecked: false 
      });
    }
    this.profileForm.reset({});
  }

  addTask(task:Task) {
    if(task){
      this.store.dispatch(addTaskAction({task}));
    }
  }

  removeTask(id:string) {
    if(id){
      this.store.dispatch(removeTaskAction({id}));
    }
  }

  updateTask(task:Task) {
    if(task){
      this.store.dispatch(updateTaskAction({task}));
    }
  }

  sortList(list:Array<Task>){
    if(list){
    // Set checked items above
      return list.sort((a:any, b:any) => b.creationDate - a.creationDate).sort((a:any, b:any) => (a.isChecked - b.isChecked))
    }
  }

}
