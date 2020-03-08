import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material Components
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {ChecklistComponent} from './checklist/checklist.component';
import {TextFieldModule} from '@angular/cdk/text-field';

import { StoreModule } from '@ngrx/store';
import { listReducer } from './store/list.reducer';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ChecklistComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, 
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatCardModule,
    TextFieldModule,
    StoreModule.forRoot({ list: listReducer }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
