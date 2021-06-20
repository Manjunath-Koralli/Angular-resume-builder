import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicResumeComponent } from './basic-resume.component';

describe('BasicResumeComponent', () => {
  let component: BasicResumeComponent;
  let fixture: ComponentFixture<BasicResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
