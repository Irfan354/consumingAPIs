import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bootstrap4Component } from './bootstrap4.component';

describe('Bootstrap4Component', () => {
  let component: Bootstrap4Component;
  let fixture: ComponentFixture<Bootstrap4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bootstrap4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bootstrap4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
