import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bootstrap5Component } from './bootstrap5.component';

describe('Bootstrap5Component', () => {
  let component: Bootstrap5Component;
  let fixture: ComponentFixture<Bootstrap5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bootstrap5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bootstrap5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
