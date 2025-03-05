import { Product } from './../../interfaces/product';
import { Component, inject } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, CommonModule, NgxPaginationModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  arrProducts: Product[];
  ProductService = inject(ProductServiceService);
  page!: number;
  product?: Product;

  constructor() {
    this.arrProducts = [];
  }

  async ngOnInit(): Promise<void> {
    try {
      this.arrProducts = await this.ProductService.getAllWithPromises();
    } catch (err) {
      console.log('Error al inicializar la API: ' + err);
    }
  }
}


