import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  httpClient = inject(HttpClient);
  private baseUrl: string = 'https://peticiones.online/api/products';

  constructor() {}

  async getAllWithPromises(): Promise<Product[]> {
    const response = await lastValueFrom(
      this.httpClient.get<{ results: Product[] }>(this.baseUrl)
    );
    return response.results ?? [];
  }

  getById(_id: string): Promise<Product> {
    return lastValueFrom(this.httpClient.get<Product>(`${this.baseUrl}/${_id}`));
  }
}
