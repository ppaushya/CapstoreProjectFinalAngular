import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressChangeComponent } from './address-change.component';

describe('AddressChangeComponent', () => {
  let component: AddressChangeComponent;
  let fixture: ComponentFixture<AddressChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
