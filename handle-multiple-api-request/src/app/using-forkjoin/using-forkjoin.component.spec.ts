import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingForkjoinComponent } from './using-forkjoin.component';

describe('UsingForkjoinComponent', () => {
  let component: UsingForkjoinComponent;
  let fixture: ComponentFixture<UsingForkjoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingForkjoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingForkjoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
