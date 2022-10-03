import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Two2dComponent } from './two2d.component';

describe('Two2dComponent', () => {
  let component: Two2dComponent;
  let fixture: ComponentFixture<Two2dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Two2dComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Two2dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
