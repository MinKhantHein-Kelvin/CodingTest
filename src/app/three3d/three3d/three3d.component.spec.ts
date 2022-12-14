import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Three3dComponent } from './three3d.component';

describe('Three3dComponent', () => {
  let component: Three3dComponent;
  let fixture: ComponentFixture<Three3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Three3dComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Three3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
