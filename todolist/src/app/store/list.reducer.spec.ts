import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { addTask, removeTask, updateTask, checkTask } from './list.actions';
import { InitialList, listReducer } from './list.reducer';

describe('default', () => {
    it('should return init state', () => {
        const noopAction = new GenericAction('noop' as TodoListActionTypes);
        const newState = todoListReducers(undefined, noopAction);

        const initState = new TodoListInitState();
        expect(newState).toEqual(initState);
    });
});

