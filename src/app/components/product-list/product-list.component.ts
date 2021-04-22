import { Component } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';
import {ProductsService} from '../../services/products.service';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  public productsList: IProduct[];
  public searchText: string;

  constructor(private productService: ProductsService, private storageService: StorageService) { }

  ionViewWillEnter() {
    this.storageService.get('searchText').then( text => {
      this.searchText = text ? text : null;
    });
  }

  public searchProducts(e): void {
    const searchableText = e.target.value;
    this.storageService.set('searchText', searchableText);
    this.productsList = (searchableText && searchableText.length > 0) ?
                        this.productService.getProductsByName(searchableText) :
                        this.productService.getAllProducts();
  }
}
