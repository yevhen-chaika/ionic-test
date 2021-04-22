import { Injectable } from '@angular/core';
import * as data from '../../assets/data.json';
import {IProduct} from '../interfaces/product.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public products: IProduct[]  = (data as any).default;

  constructor() { }

  public getAllProducts(): IProduct[] {
    return this.products;
  }

  public getProductById(id: number): IProduct {
    return this.products.filter(product => product.sku === id)[0];
  }

  public getProductsByName(text: string): IProduct[] {
    return this.products.filter(product => product.name.toLocaleLowerCase().includes(text.toLowerCase()));
  }
}
