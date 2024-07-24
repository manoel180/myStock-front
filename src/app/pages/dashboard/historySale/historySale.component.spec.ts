/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HistorySaleComponent } from './historySale.component';

describe('HistorySaleComponent', () => {
  let component: HistorySaleComponent;
  let fixture: ComponentFixture<HistorySaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorySaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorySaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
