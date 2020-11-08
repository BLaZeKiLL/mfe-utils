import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeUtilsAngularComponent } from './mfe-utils-angular.component';

describe('MfeUtilsAngularComponent', () => {
  let component: MfeUtilsAngularComponent;
  let fixture: ComponentFixture<MfeUtilsAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfeUtilsAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfeUtilsAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
