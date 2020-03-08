import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { addTask, removeTask, updateTask, checkTask } from '../store/list.actions';
import { Task } from '../store/task.interface'

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {
  
  list$: Observable<Array<Task>>;
  todos: Array<Task>

  constructor(private store: Store<{ list: Array<Task> }>) { 
    this.list$ = store.pipe(select('list'))
  }

  ngOnInit(): void {
  }

/*
  addTask(task:Task) {
    this.store.dispatch(addTask({task}));
  }

  removeTask(id:string) {
    this.store.dispatch(removeTask({id}));
  }
*/
  updateTask(task:Task) {
    this.store.dispatch(updateTask({task}));
  }

/*
  sortCheckList(input: Array<any>) {
    return input.slice().sort((a,b) => (a.isChecked === b.isChecked)? 0 : a.isChecked ? -1 : 1)
  }
*/


}
