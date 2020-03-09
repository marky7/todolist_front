import { createReducer, on } from '@ngrx/store';
import { Task } from './task.interface';
import { addTaskAction, removeTaskAction, updateTaskAction } from './list.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { UUID } from 'angular2-uuid';


export interface TaskListInterface {
  [index: number]: Task;
}

export const InitialList:TaskListInterface = new Array(
  {
    title : '1: List my TODOs',
    description : 'As a user I would like to list my current todos',
    isChecked: true,
    id:'1F2504E0-4F89-11D3-9A0C-0305E82C3301',
    creationDate: new Date('December 11, 1995 03:24:00')
  },{
    title : '2: Change a TODO state',
    description : 'As a user I would like to change a todo state by checking a "box"',
    isChecked: false,
    id:'2F2504E0-4F89-11D3-9A0C-0305E82C3302',
    creationDate: new Date('December 12, 1995 03:24:00')
  },{
    title : '3: Detail a TODO',
    description : 'As a user I would like to display one of my todo in a separate or dedicated view. This todo will contain its title and a description (which is a new information not shown in the previous view).',
    isChecked: false,
    id:'3F2504E0-4F89-11D3-9A0C-0305E82C3303',
    creationDate: new Date('December 13, 1995 03:24:00')
  },{
    title : '4: Add a new TODO',
    description : 'As a user I would like to add a new todo in my list',
    isChecked: false,
    id:'4F2504E0-4F89-11D3-9A0C-0305E82C3304',
    creationDate: new Date('December 14, 1995 03:24:00')
  }
);

function getTaskIndexById(list,id){
  const getElementById = (element) => element.id === id;
  return list.findIndex(getElementById);
}

function updateTaskFn(list,params){
  const curIndex = getTaskIndexById(list,params.task.id);
  list[curIndex]= params.task;
  return list;
}

function addTaskFn(list,params){
  params.task.creationDate = Date.now();
  params.task.id = UUID.UUID();
  list.push(params.task);
  return list;
}

function removeTaskFn(list,params){
  const curIndex = getTaskIndexById(list,params.id);
  list.splice(curIndex,1);
  return list;
}

const _listReducer = createReducer(InitialList,
  on(updateTaskAction, updateTaskFn),
  on(addTaskAction, addTaskFn),
  on(removeTaskAction, removeTaskFn),
);

export function listReducer(state, action) {
  return _listReducer(state, action);
}
