import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpdbComponent } from './phpdb.component';

describe('PhpdbComponent', () => {
  let component: PhpdbComponent;
  let fixture: ComponentFixture<PhpdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhpdbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhpdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
