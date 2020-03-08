/*
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';
*/
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { addTaskAction, removeTaskAction, updateTaskAction, checkTaskAction } from './list.actions';
import { InitialList, listReducer } from './list.reducer';
import { Task } from './task.interface';

describe('listReducer', () => {

    let myUpdatedTask:Task = {
        title : '1: List my TODOs UPDATED',
        description : 'As a user I would like to list my current todos',
        isChecked: false,
        id:'1F2504E0-4F89-11D3-9A0C-0305E82C3301',
        creationDate: new Date('December 13, 1995 03:14:00')
    };

    let myNewTask:Task = {
        title : '10: Not in the Initial State',
        description : 'bla bla bla',
        isChecked: false,
        id:'00000000-0000-0000-0000-000000000000',
        creationDate: new Date('December 23, 2020 03:14:00')
    };

    function deepClone(arg:any){
        return JSON.parse(JSON.stringify(arg))
    }

    it('LIST REDUCER: should return the object unchanged', () => {
        const action = updateTaskAction({task:InitialList[0]});
        const result = listReducer(InitialList, action);
        expect(result).toEqual(InitialList); // TO VERIFY
    });

    it('LIST REDUCER: should return the task updated', () => {
        let InitialListDeepCopy = deepClone(InitialList)
        let myUpdatedTaskDeepCopy = deepClone(myUpdatedTask);
        const action = updateTaskAction({task:myUpdatedTaskDeepCopy});
        const result = listReducer(InitialListDeepCopy, action);

        var myUpdatedTaskResult = null;
        for(var i=0; i<result.length; i++){
            if(result[i].id === myUpdatedTaskDeepCopy.id){
                myUpdatedTaskResult = result[i];
            }
        }
        expect(myUpdatedTaskResult).toEqual(myUpdatedTaskDeepCopy);
    });

    it('LIST REDUCER: should delete the task', () => {
        let InitialListDeepCopy = deepClone(InitialList);
        const taskToRemovedId = InitialListDeepCopy[0].id;
        const action = removeTaskAction({id:taskToRemovedId});
        const result = listReducer(InitialListDeepCopy, action);

        var elemStillExistsInList = false;
        for(var i=0; i<result.length; i++){
            if(result[i].id === taskToRemovedId){
                elemStillExistsInList = true;
            }
        }
        expect(elemStillExistsInList).toBe(false)
    });

    it('LIST REDUCER: should add a new task', () => {
        let InitialListDeepCopy = deepClone(InitialList);
        let myNewTaskDeepCopy = deepClone(myNewTask);
        const action = addTaskAction({task:myNewTaskDeepCopy});
        const result = listReducer(InitialListDeepCopy, action);
        var elemExistsInList = false;
        for(var i=0; i<result.length; i++){
            if(result[i].id === myNewTaskDeepCopy.id){
                elemExistsInList = true;
            }
        }
        expect(elemExistsInList).toBe(true)
    });
 

});

