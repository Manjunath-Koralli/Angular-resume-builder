import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPreviewComponent } from './basic-preview.component';

describe('BasicPreviewComponent', () => {
  let component: BasicPreviewComponent;
  let fixture: ComponentFixture<BasicPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
