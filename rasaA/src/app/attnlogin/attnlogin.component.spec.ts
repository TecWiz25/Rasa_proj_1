import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttnloginComponent } from './attnlogin.component';

describe('AttnloginComponent', () => {
  let component: AttnloginComponent;
  let fixture: ComponentFixture<AttnloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttnloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttnloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
