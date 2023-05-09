import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kv4Component } from './kv4.component';

describe('Kv4Component', () => {
  let component: Kv4Component;
  let fixture: ComponentFixture<Kv4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kv4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kv4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
