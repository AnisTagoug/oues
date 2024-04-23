import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStudygComponent } from './update-studyg.component';

describe('UpdateStudygComponent', () => {
  let component: UpdateStudygComponent;
  let fixture: ComponentFixture<UpdateStudygComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStudygComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateStudygComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
