import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product';
import { BotoneraComponent } from "../botonera/botonera.component";

@Component({
  selector: 'app-product-card',
  imports: [BotoneraComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() miProducto!: Product;

}
