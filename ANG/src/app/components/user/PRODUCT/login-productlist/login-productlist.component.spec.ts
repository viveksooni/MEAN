import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginProductlistComponent } from './login-productlist.component';

describe('LoginProductlistComponent', () => {
  let component: LoginProductlistComponent;
  let fixture: ComponentFixture<LoginProductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginProductlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginProductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
