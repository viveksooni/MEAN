import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLoginProductComponent } from './no-login-product.component';

describe('NoLoginProductComponent', () => {
  let component: NoLoginProductComponent;
  let fixture: ComponentFixture<NoLoginProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoLoginProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLoginProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
