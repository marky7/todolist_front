import { createReducer, on } from '@ngrx/store';
import { Task } from './task.interface';
import { addTask, removeTask, updateTask, checkTask } from './list.actions';

 interface TaskList {
  [index: number]: Task;
}

export const InitialList:TaskList = new Array(
  {
    title : '1: List my TODOs',
    description : 'As a user I would like to list my current todos',
    creationDate: new Date('December 17, 2020 10:24:00'),
    isChecked: true,
    id:'1F2504E0-4F89-11D3-9A0C-0305E82C3301'
  },{
    title : '2: Change a TODO state',
    description : 'As a user I would like to change a todo state by checking a "box"',
    creationDate: new Date('December 17, 2020 11:24:00'),
    isChecked: false,
    id:'2F2504E0-4F89-11D3-9A0C-0305E82C3302'
  },{
    title : '3: Detail a TODO',
    description : 'As a user I would like to display one of my todo in a separate or dedicated view. This todo will contain its title and a description (which is a new information not shown in the previous view).',
    creationDate: new Date('December 17, 2020 12:24:00'),
    isChecked: false,
    id:'3F2504E0-4F89-11D3-9A0C-0305E82C3303'
  },{
    title : '4: Add a new TODO',
    description : 'As a user I would like to add a new todo in my list',
    creationDate: new Date('December 17, 2020 13:24:00'),
    isChecked: false,
    id:'4F2504E0-4F89-11D3-9A0C-0305E82C3304'
  }
);

/*
function sortList(list:any){
  // Set checked items above
  return list.sort((a,b) => (a.isChecked - b.isChecked) )
}
*/
/*
function addTaskFn(list,obj) {
  return sortList(list.push({
    title : '4: Add a new TODO',
    description : 'As a user I would like to add a new todo in my list',
    creationDate: new Date('December 17, 2020 13:24:00'),
    isChecked: false,
    id:'4F2504E0-4F89-11D3-9A0C-0305E82C3304'
  }));
}
*/

/*
function removeTaskFn(list,id) {
  return sortList(list); 
}
*/

function getTaskIndexById(list,id){
  const getElementById = (element) => element.id === list.id;
  return list.findIndex(getElementById);
}

function updateTaskFn(list,task){
  const index = getTaskIndexById(list,task.id);
  list[index]=task;
  return list
}

const _listReducer = createReducer(InitialList,
  on(updateTask, updateTaskFn),
//  on(addTask, addTaskFn),
//  on(removeTask, removeTaskFn),
);

export function listReducer(state, action) {
  return _listReducer(state, action);
}
