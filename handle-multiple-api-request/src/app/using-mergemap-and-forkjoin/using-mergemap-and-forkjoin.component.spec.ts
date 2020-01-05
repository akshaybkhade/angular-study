import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingMergemapAndForkjoinComponent } from './using-mergemap-and-forkjoin.component';

describe('UsingMergemapAndForkjoinComponent', () => {
  let component: UsingMergemapAndForkjoinComponent;
  let fixture: ComponentFixture<UsingMergemapAndForkjoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingMergemapAndForkjoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingMergemapAndForkjoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
