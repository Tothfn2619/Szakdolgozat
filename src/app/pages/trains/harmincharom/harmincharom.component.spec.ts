import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarmincharomComponent } from './harmincharom.component';

describe('HarmincharomComponent', () => {
  let component: HarmincharomComponent;
  let fixture: ComponentFixture<HarmincharomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarmincharomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HarmincharomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
