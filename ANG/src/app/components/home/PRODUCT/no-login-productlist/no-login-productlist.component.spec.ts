import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLoginProductlistComponent } from './no-login-productlist.component';

describe('NoLoginProductlistComponent', () => {
  let component: NoLoginProductlistComponent;
  let fixture: ComponentFixture<NoLoginProductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoLoginProductlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLoginProductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
