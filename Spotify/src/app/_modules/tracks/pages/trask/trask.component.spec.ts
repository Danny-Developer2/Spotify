import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraskComponent } from './trask.component';

describe('TraskComponent', () => {
  let component: TraskComponent;
  let fixture: ComponentFixture<TraskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
