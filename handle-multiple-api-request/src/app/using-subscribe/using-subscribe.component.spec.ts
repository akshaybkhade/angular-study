import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingSubscribeComponent } from './using-subscribe.component';

describe('UsingSubscribeComponent', () => {
  let component: UsingSubscribeComponent;
  let fixture: ComponentFixture<UsingSubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingSubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
