import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C50dialogComponent } from './c50dialog.component';

describe('C50dialogComponent', () => {
  let component: C50dialogComponent;
  let fixture: ComponentFixture<C50dialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C50dialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C50dialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
