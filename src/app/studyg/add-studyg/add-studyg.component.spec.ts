import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudygComponent } from './add-studyg.component';

describe('AddStudygComponent', () => {
  let component: AddStudygComponent;
  let fixture: ComponentFixture<AddStudygComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudygComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStudygComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
