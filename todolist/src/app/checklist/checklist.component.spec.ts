import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistComponent } from './checklist.component';

// Material Components
import {TextFieldModule} from '@angular/cdk/text-field';

describe('ChecklistComponent', () => {
  let component: ChecklistComponent;
  let fixture: ComponentFixture<ChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistComponent ],
    imports: [
      TextFieldModule
  ]})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
