import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosServiceDetalleComponent } from './productos-service-detalle.component';

describe('ProductosServiceDetalleComponent', () => {
  let component: ProductosServiceDetalleComponent;
  let fixture: ComponentFixture<ProductosServiceDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosServiceDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosServiceDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
