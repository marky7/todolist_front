/*
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';
*/
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { addTask, removeTask, updateTask, checkTask } from './list.actions';
import { InitialList, listReducer } from './list.reducer';
import { Task } from './task.interface';

describe('listReducer', () => {

    let myUpdatedTask:Task = {
        title : '1: List my TODOs UPDATED',
        description : 'As a user I would like to list my current todos',
        creationDate: new Date('December 18, 2020 10:24:00'),
        isChecked: false,
        id:'1F2504E0-4F89-11D3-9A0C-0305E82C3301'
    };
/*
    let myUndefinedTask:Task = {
        title : '10: Not in the Initial State',
        description : 'bla bla bla',
        creationDate: new Date('December 27, 2020 11:24:00'),
        isChecked: false,
        id:'00000000-0000-0000-0000-000000000000'
    };
*/
    it('REDUCER: should return the object unchanged', () => {
        const action = updateTask({task:myUpdatedTask});
        const result = listReducer(InitialList, action);
        expect(result).toEqual(InitialList);
    });

    it('REDUCER: should return the task updated', () => {
        const action = updateTask({task:myUpdatedTask});
        const result = listReducer(InitialList, action);
        expect(result[0]).toEqual(myUpdatedTask);
    });
 
});

