import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarminckettoComponent } from './harmincketto.component';

describe('HarminckettoComponent', () => {
  let component: HarminckettoComponent;
  let fixture: ComponentFixture<HarminckettoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarminckettoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HarminckettoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
