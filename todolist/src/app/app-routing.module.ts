import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChecklistComponent } from './checklist/checklist.component'
import { TodoDetailComponent } from './todo-detail/todo-detail.component'

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'checklist',
    pathMatch: 'full'
  },{ 
    path: 'checklist', 
    component: ChecklistComponent 
  },{ 
    path: 'checklist/:id', 
    component: TodoDetailComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
