import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KismavComponent } from './kismav.component';

describe('KismavComponent', () => {
  let component: KismavComponent;
  let fixture: ComponentFixture<KismavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KismavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KismavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
