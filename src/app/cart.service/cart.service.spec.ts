import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  let component: CartService;
  let fixture: ComponentFixture<CartService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
