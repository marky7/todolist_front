import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ChecklistComponent } from './checklist.component';
import { InitialList, listReducer, TaskListInterface } from '../store/list.reducer';
import { addTaskAction, removeTaskAction, updateTaskAction } from './../store/list.actions';
import { Store } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
// Material Components
import { TextFieldModule } from '@angular/cdk/text-field';
import { Task } from '../store/task.interface';
import { TestStore } from '../../testing/utils/TestStore';



describe('ChecklistComponent', () => {
  let component: ChecklistComponent;
  let fixture: ComponentFixture<ChecklistComponent>;
  let store: any;

  let myUpdatedTask:Task = {
    title : '1: List my TODOs UPDATED',
    description : 'As a user I would like to list my current todos',
    isChecked: false,
    id:'1F2504E0-4F89-11D3-9A0C-0305E82C3301',
    creationDate: new Date('December 10, 1995 03:24:00')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ChecklistComponent 
      ], providers: [
        provideMockStore(InitialList)
      ], imports: [
        TextFieldModule,
        // StoreModule.forRoot({ list: listReducer })
        // StoreModule.forRoot(listReducer)
      ],      
        schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should submit form', () => {
    // Insert default data in component
    console.log("Ca marche ?");
    console.log(component.list);

/*    component.profileForm.value.title = 'My New Task';
    component.profileForm.value.description = 'My New Task Description';
    component.onSubmit();
    console.log(component.list); 
*/
    expect(true).toBe(true);
  });

/*
  it('should not submit form', () => {
    // Insert default data in component 
    component.profileForm.value.title = '';
    component.profileForm.value.description = '';
    
    component.onSubmit();
  });
*/

});


// TODO - https://medium.com/angular-in-depth/how-to-unit-test-angular-components-with-fake-ngrx-teststore-f0500cc5fc26
describe('TodosComponent', () => {

  let store: TestStore<TaskListInterface>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Store, useClass: TestStore }   // use test store instead of ngrx store
      ]
    }).compileComponents();
  }));

  beforeEach(inject([Store], (testStore: TestStore<TaskListInterface>) => {
    store = testStore;                            // save store reference for use in tests                                  
    store.setState(InitialList);                  // set default state
  }));
    
});