import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { ChecklistComponent } from './checklist.component';
import { InitialList, listReducer, TaskListInterface } from '../store/list.reducer';
import { addTask, removeTask, updateTask, checkTask } from './../store/list.actions';
import { Store } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
// Material Components
import { TextFieldModule } from '@angular/cdk/text-field';
import { Task } from '../store/task.interface';
import { StoreModule } from '@ngrx/store';


describe('ChecklistComponent', () => {
  let component: ChecklistComponent;
  let fixture: ComponentFixture<ChecklistComponent>;
  let store: any;

  let myUpdatedTask:Task = {
    title : '1: List my TODOs UPDATED',
    description : 'As a user I would like to list my current todos',
    creationDate: new Date('December 18, 2020 10:24:00'),
    isChecked: false,
    id:'1F2504E0-4F89-11D3-9A0C-0305E82C3301'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistComponent ],
      providers: [MockStore],
      imports: [
        TextFieldModule,
        StoreModule.forRoot({ list: listReducer })
  ]})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.get(Store);
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

});




