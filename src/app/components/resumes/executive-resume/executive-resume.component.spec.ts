import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveResumeComponent } from './executive-resume.component';

describe('ExecutiveResumeComponent', () => {
  let component: ExecutiveResumeComponent;
  let fixture: ComponentFixture<ExecutiveResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutiveResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutiveResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
