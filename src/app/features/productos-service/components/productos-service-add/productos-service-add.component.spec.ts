import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosServiceAddComponent } from './productos-service-add.component';

describe('ProductosServiceAddComponent', () => {
  let component: ProductosServiceAddComponent;
  let fixture: ComponentFixture<ProductosServiceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosServiceAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosServiceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
