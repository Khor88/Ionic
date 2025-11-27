import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleRestaurantePage } from './detalle.restaurante.page';

describe('DetalleRestaurantePage', () => {
  let component: DetalleRestaurantePage;
  let fixture: ComponentFixture<DetalleRestaurantePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleRestaurantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
