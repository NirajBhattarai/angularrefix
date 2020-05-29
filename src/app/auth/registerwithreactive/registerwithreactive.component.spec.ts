import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterwithreactiveComponent } from './registerwithreactive.component';

describe('RegisterwithreactiveComponent', () => {
  let component: RegisterwithreactiveComponent;
  let fixture: ComponentFixture<RegisterwithreactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterwithreactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterwithreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
