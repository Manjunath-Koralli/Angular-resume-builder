import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverLettersComponent } from './cover-letters.component';

describe('CoverLettersComponent', () => {
  let component: CoverLettersComponent;
  let fixture: ComponentFixture<CoverLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverLettersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
