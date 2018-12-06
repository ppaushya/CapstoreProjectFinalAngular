import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantSignInComponent } from './merchant-sign-in.component';

describe('MerchantSignInComponent', () => {
  let component: MerchantSignInComponent;
  let fixture: ComponentFixture<MerchantSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
