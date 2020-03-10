import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Create a mockActions
import { Action } from '@ngrx/store';
const MOCK_ACTION = '[MOCK] ACTION';

export class MockAction implements Action {
  readonly type = MOCK_ACTION;
  //As we don't know the payload, we mark it as unknown
  readonly payload: unknown;

  constructor(payload?: unknown) {
    //Payload is optional, not every action has payload!
    this.payload = payload;
  }
}

// Create a mockReducer (we will store every action)
export function createMockReducer<T>(initialState: T) {
  return function reducer(state: any = initialState, action: { payload: any }): T {
    // Everything will be stored to the store
    return { ...state, ...action.payload };
  };
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'todolist'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('todolist');
  });
});
