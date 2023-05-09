import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mk48hComponent } from './mk48h.component';

describe('Mk48hComponent', () => {
  let component: Mk48hComponent;
  let fixture: ComponentFixture<Mk48hComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mk48hComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mk48hComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
