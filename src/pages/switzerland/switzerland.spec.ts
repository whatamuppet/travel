import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Switzerland } from './switzerland';

describe('Switzerland', () => {
  let component: Switzerland;
  let fixture: ComponentFixture<Switzerland>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Switzerland],
    }).compileComponents();

    fixture = TestBed.createComponent(Switzerland);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
