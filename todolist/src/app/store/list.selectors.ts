import { createSelector } from '@ngrx/store';

export const getTaskState$ = (state) =>  state.list;

function getTaskIndexById(list,id){
    const getElementById = (element) => element.id === id;
    return list.findIndex(getElementById);
}
  
export const getTask = createSelector(
    getTaskState$,
  (state, { id }) => {
      if(state){
        const index:number = getTaskIndexById(state,id)
        return state[index];  
      } else {
          return null;
      }
    }
);

