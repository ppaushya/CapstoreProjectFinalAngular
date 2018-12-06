import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidermainpageComponent } from './slidermainpage.component';

describe('SlidermainpageComponent', () => {
  let component: SlidermainpageComponent;
  let fixture: ComponentFixture<SlidermainpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidermainpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidermainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
