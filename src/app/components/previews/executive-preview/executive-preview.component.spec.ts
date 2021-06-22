import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutivePreviewComponent } from './executive-preview.component';

describe('ExecutivePreviewComponent', () => {
  let component: ExecutivePreviewComponent;
  let fixture: ComponentFixture<ExecutivePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutivePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutivePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
