import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaxComponent } from './bax.component';

describe('BaxComponent', () => {
  let component: BaxComponent;
  let fixture: ComponentFixture<BaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
