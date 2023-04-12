import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceAComponent } from './attendance-a.component';

describe('AttendanceAComponent', () => {
  let component: AttendanceAComponent;
  let fixture: ComponentFixture<AttendanceAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
