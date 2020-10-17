import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosServiceListadoComponent } from './productos-service-listado.component';

describe('ProductosServiceListadoComponent', () => {
  let component: ProductosServiceListadoComponent;
  let fixture: ComponentFixture<ProductosServiceListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosServiceListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosServiceListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
