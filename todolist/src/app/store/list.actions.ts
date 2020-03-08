import { createAction, props} from '@ngrx/store';
import { Task } from './task.interface';

export const addTaskAction = createAction('[Task Component] add',
    props<{ task: Task; }>()
);

export const removeTaskAction = createAction('[Task Component] remove',     
    props<{ id: string; }>()
);

export const updateTaskAction = createAction('[Task Component] update',     
    props<{ task: Task; }>()
);

export const checkTaskAction = createAction('[Task Component] check',     
    props<{ task: Task; }>()
);

