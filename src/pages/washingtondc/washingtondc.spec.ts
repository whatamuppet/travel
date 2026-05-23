import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Washingtondc } from './washingtondc';

describe('Washingtondc', () => {
  let component: Washingtondc;
  let fixture: ComponentFixture<Washingtondc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Washingtondc],
    }).compileComponents();

    fixture = TestBed.createComponent(Washingtondc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
