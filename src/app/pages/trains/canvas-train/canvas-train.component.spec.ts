import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasTrainComponent } from './canvas-train.component';

describe('CanvasTrainComponent', () => {
  let component: CanvasTrainComponent;
  let fixture: ComponentFixture<CanvasTrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasTrainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvasTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
