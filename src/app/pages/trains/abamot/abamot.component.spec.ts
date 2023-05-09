import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbamotComponent } from './abamot.component';

describe('AbamotComponent', () => {
  let component: AbamotComponent;
  let fixture: ComponentFixture<AbamotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbamotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbamotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
