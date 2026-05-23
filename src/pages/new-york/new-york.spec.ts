import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewYork } from './new-york';

describe('NewYork', () => {
  let component: NewYork;
  let fixture: ComponentFixture<NewYork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewYork],
    }).compileComponents();

    fixture = TestBed.createComponent(NewYork);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
