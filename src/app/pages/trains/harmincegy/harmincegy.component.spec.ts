import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarmincegyComponent } from './harmincegy.component';

describe('HarmincegyComponent', () => {
  let component: HarmincegyComponent;
  let fixture: ComponentFixture<HarmincegyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarmincegyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HarmincegyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
