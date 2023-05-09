import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B26Component } from './b26.component';

describe('B26Component', () => {
  let component: B26Component;
  let fixture: ComponentFixture<B26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ B26Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(B26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
