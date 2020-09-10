import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnsucessComponent } from './onsucess.component';

describe('OnsucessComponent', () => {
  let component: OnsucessComponent;
  let fixture: ComponentFixture<OnsucessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnsucessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnsucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
