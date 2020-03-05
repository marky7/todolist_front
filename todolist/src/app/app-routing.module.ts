import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChecklistComponent } from './checklist/checklist.component'

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'checklist',
    pathMatch: 'full'
  },{ 
    path: 'checklist', 
    component: ChecklistComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
