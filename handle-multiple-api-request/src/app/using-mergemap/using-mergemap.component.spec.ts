import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingMergemapComponent } from './using-mergemap.component';

describe('UsingMergemapComponent', () => {
  let component: UsingMergemapComponent;
  let fixture: ComponentFixture<UsingMergemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingMergemapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingMergemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
