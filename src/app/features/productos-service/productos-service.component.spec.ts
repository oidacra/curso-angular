import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosServiceComponent } from './productos-service.component';

describe('ProductosServiceComponent', () => {
  let component: ProductosServiceComponent;
  let fixture: ComponentFixture<ProductosServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
