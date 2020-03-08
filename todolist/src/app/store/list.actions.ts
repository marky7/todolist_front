import { createAction, props} from '@ngrx/store';
import { Task } from './task.interface';

export const addTask = createAction('[Task Component] add',
    props<{ task: Task; }>()
);

export const removeTask = createAction('[Task Component] remove',     
    props<{ id: string; }>()
);

export const updateTask = createAction('[Task Component] update',     
    props<{ task: Task; }>()
);

export const checkTask = createAction('[Task Component] check',     
    props<{ task: Task; }>()
);

