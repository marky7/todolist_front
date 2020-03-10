import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ChecklistComponent } from './checklist.component';
import { InitialList, listReducer, TaskListInterface } from '../store/list.reducer';
import { addTaskAction, removeTaskAction, updateTaskAction } from './../store/list.actions';
import { Store } from '@ngrx/store';

// Material Components
import { TextFieldModule } from '@angular/cdk/text-field';
import { Task } from '../store/task.interface';

describe('ChecklistComponent', () => {

  let store: MockStore<TaskListInterface>;

  let component: ChecklistComponent;
  let fixture: ComponentFixture<ChecklistComponent>;

  let dispatchSpy;

  let myUpdatedTask:Task = {
    title : '1: List my TODOs UPDATED',
    description : 'As a user I would like to list my current todos',
    isChecked: false,
    id:'1F2504E0-4F89-11D3-9A0C-0305E82C3301',
    creationDate: new Date('December 10, 1995 03:24:00')
  };

  let myNexTask:Task = {
    title : '10: Random Task',
    description : 'toto',
    isChecked: false,
    id:'451204E0-4F89-11D3-9A0C-0305E82C3301',
    creationDate: new Date('December 10, 1995 03:24:00')
  };
  
  function deepClone(arg:any){
    return JSON.parse(JSON.stringify(arg))
  }

  const initState = deepClone(InitialList);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ChecklistComponent 
      ], providers: [
        provideMockStore(initState)
      ], imports: [
        TextFieldModule,
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

  beforeEach(inject([Store], (testStore: MockStore<TaskListInterface>) => {
    store = testStore;                            // save store reference for use in tests                                  
    store.setState(initState);                    // set default state
    dispatchSpy = spyOn(store, 'dispatch');
  }));

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should submit form to add task', () => {
    // Insert default data in component
    const newTaskTitle = "my title";
    const newTaskDescription = "description";
    component.profileForm.value.title = newTaskTitle;
    component.profileForm.value.description = newTaskDescription;

    component.onSubmit();
    
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(
      addTaskAction({ task: {
        title : newTaskTitle,
        description: newTaskDescription,
        creationDate : null, // Will be filled by reducer
        id : null, // Will be filled by reducer
        isChecked: false 
      } })
    );

    // These fields have been reset
    expect(component.profileForm.value.title).toBe(null);
    expect(component.profileForm.value.description).toBe(null);
  });

  
  it('should not submit form to add task', () => {
    // Insert default data in component
    const newTaskTitle = ""; // title is missing
    const newTaskDescription = "description";
    component.profileForm.value.title = newTaskTitle;
    component.profileForm.value.description = newTaskDescription;

    component.onSubmit();
    
    expect(dispatchSpy).toHaveBeenCalledTimes(0);

    // These fields have been reset
    expect(component.profileForm.value.title).toBe(null);
    expect(component.profileForm.value.description).toBe(null);
  });


  it('should dispatch add todo action', () => {
    component.addTask(myNexTask);
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(
      addTaskAction({ task: myNexTask })
    );
  });

  it('should not dispatch add todo action', () => {
    component.addTask(null);
    expect(dispatchSpy).toHaveBeenCalledTimes(0);
  });

  it('should dispatch update task action', () => {
    component.updateTask(myUpdatedTask);
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(
      updateTaskAction({ task: myUpdatedTask })
    );
  });

  it('should not dispatch update task action', () => {
    component.updateTask(null);
    expect(dispatchSpy).toHaveBeenCalledTimes(0);
  });

  it('should dispatch remove task action', () => {
    component.removeTask(myUpdatedTask.id);
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(
      removeTaskAction({ id: myUpdatedTask.id })
    );
  });

  it('should not dispatch remove task action', () => {
    component.removeTask(null);
    expect(dispatchSpy).toHaveBeenCalledTimes(0);
  });

  it('should sort list by creationdate and then isChecked', () => {
    let myInitialList = [
      {isChecked:true, creationDate:new Date('December 10, 1995 03:24:00'), description:"",title:"toto",id:"titi"},
      {isChecked:false, creationDate:new Date('December 11, 1995 03:24:00'), description:"",title:"toto",id:"titi"},
      {isChecked:false, creationDate:new Date('December 09, 1995 03:24:00'), description:"",title:"toto",id:"titi"},
      {isChecked:true, creationDate:new Date('December 08, 1995 03:24:00'), description:"",title:"toto",id:"titi"},
    ];

    // Last items are displayed at the top of the array
    const mySortedList = [
      {isChecked:false, creationDate:new Date('December 11, 1995 03:24:00'), description:"",title:"toto",id:"titi"},
      {isChecked:false, creationDate:new Date('December 09, 1995 03:24:00'), description:"",title:"toto",id:"titi"},
      {isChecked:true, creationDate:new Date('December 10, 1995 03:24:00'), description:"",title:"toto",id:"titi"},
      {isChecked:true, creationDate:new Date('December 08, 1995 03:24:00'), description:"",title:"toto",id:"titi"},
    ];

    expect(component.sortList(myInitialList)).toEqual(mySortedList)
  });

});

