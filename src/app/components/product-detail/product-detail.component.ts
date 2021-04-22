import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  public productData: IProduct;
  public quantity: number = null;
  public amount: number = null;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ionViewWillEnter() {
    this.getProductData(this.route.snapshot.params.id);
  }

  public onAmountChanged(): void {
      this.quantity = Math.floor(this.amount / this.productData.price);
      this.amount = parseFloat((this.quantity * this.productData.price).toFixed(2));
  }

  public onQuantityChanged(): void {
    this.amount = parseFloat((this.quantity * this.productData.price).toFixed(2));
  }

  private getProductData(id): void {
    this.productData = this.productsService.getProductById(parseFloat(id));
  }
}
