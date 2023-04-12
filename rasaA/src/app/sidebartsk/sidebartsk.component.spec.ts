import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebartskComponent } from './sidebartsk.component';

describe('SidebartskComponent', () => {
  let component: SidebartskComponent;
  let fixture: ComponentFixture<SidebartskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebartskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebartskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
