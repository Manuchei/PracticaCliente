import { Component, inject, Input } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-botonera',
  imports: [RouterLink],
  templateUrl: './botonera.component.html',
  styleUrl: './botonera.component.css'
})
export class BotoneraComponent {

  UsersService = inject(ProductServiceService);
  router = inject(Router);

  @Input() _id: string;
  @Input() parent: string;

  constructor() {
    this._id = '';
    this.parent = '';
  }

}