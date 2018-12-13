import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutsomerProfileComponent } from './cutsomer-profile.component';

describe('CutsomerProfileComponent', () => {
  let component: CutsomerProfileComponent;
  let fixture: ComponentFixture<CutsomerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutsomerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutsomerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
