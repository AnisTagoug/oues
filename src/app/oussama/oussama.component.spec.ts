import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OussamaComponent } from './oussama.component';

describe('OussamaComponent', () => {
  let component: OussamaComponent;
  let fixture: ComponentFixture<OussamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OussamaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OussamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
