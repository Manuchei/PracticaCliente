import { ProductServiceService } from './../../services/product-service.service';
import { Component, inject } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { BotoneraComponent } from '../../components/botonera/botonera.component';

@Component({
  selector: 'app-product-view',
  imports: [BotoneraComponent],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {
  miProducto!: Product;

  ProductServiceService = inject(ProductServiceService);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (paramas: any) => {
      let _id: string = paramas._id as string;

      try {
        this.miProducto = await this.ProductServiceService.getById(_id);
      } catch (err) {
        console.log('Error al llamar a la API: ' + err);
      }
    });
  }
}