import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { TodoDetailComponent } from './todo-detail.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { InitialList, TaskListInterface } from '../store/list.reducer';
import {ActivatedRoute} from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';

describe('TodoDetailComponent', () => {

  let component: TodoDetailComponent;
  let fixture: ComponentFixture<TodoDetailComponent>;

  let store: MockStore<TaskListInterface>;

  function deepClone(arg:any){
    return JSON.parse(JSON.stringify(arg))
  }

  const initState = deepClone(InitialList);
  
  let mockActivatedRoute = {
    params: of({ id: initState[1].id }) 
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TodoDetailComponent 
      ], providers: [
        provideMockStore(initState),
        {
         provide: ActivatedRoute,
         useValue: mockActivatedRoute 
        }
      ], imports: [],    
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(inject([Store], (testStore: MockStore<TaskListInterface>) => {
    store = testStore;                            // save store reference for use in tests                                  
    store.setState(initState);                    // set default state
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
