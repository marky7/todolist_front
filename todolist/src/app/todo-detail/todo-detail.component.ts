import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Task } from '../store/task.interface'
import {ActivatedRoute} from '@angular/router';
import { getTask } from '../store/list.selectors'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})

export class TodoDetailComponent implements OnInit {
  task: Task;
  private routeSub: Subscription;

  constructor(private store: Store<{ list: Array<Task> }>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
        this.store.pipe(select(getTask, { id: params.id })).subscribe(task => {
          this.task = task;
        });  
    });
  }
}
