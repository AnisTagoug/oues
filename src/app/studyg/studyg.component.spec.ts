import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudygComponent } from './studyg.component';

describe('StudygComponent', () => {
  let component: StudygComponent;
  let fixture: ComponentFixture<StudygComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudygComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudygComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
