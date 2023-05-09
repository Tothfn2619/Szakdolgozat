import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NagymavComponent } from './nagymav.component';

describe('NagymavComponent', () => {
  let component: NagymavComponent;
  let fixture: ComponentFixture<NagymavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NagymavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NagymavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
