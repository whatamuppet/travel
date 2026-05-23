import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurksAndCaicos } from './turks-and-caicos';

describe('TurksAndCaicos', () => {
  let component: TurksAndCaicos;
  let fixture: ComponentFixture<TurksAndCaicos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurksAndCaicos],
    }).compileComponents();

    fixture = TestBed.createComponent(TurksAndCaicos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
