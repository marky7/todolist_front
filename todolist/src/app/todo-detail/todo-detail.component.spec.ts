import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoDetailComponent } from './todo-detail.component';
import { StoreModule } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { InitialList, listReducer, TaskListInterface } from '../store/list.reducer';
import {ActivatedRoute} from '@angular/router';

describe('TodoDetailComponent', () => {
  let component: TodoDetailComponent;
  let fixture: ComponentFixture<TodoDetailComponent>;

  const fakeActivatedRoute = {
      snapshot: {
        data : {
          // TODO
        }
      } 
    } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDetailComponent ], 
      providers: [
        MockStore
      ], imports: [
        //StoreModule.forRoot({ list: listReducer })
        StoreModule.forRoot(listReducer)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
