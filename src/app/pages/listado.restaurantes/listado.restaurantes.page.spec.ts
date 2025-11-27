import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoRestaurantesPage } from './listado.restaurantes.page';

describe('ListadoRestaurantesPage', () => {
  let component: ListadoRestaurantesPage;
  let fixture: ComponentFixture<ListadoRestaurantesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoRestaurantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
