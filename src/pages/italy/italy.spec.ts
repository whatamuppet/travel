import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Italy } from './italy';

describe('Italy', () => {
  let component: Italy;
  let fixture: ComponentFixture<Italy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Italy],
    }).compileComponents();

    fixture = TestBed.createComponent(Italy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
