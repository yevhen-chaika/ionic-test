import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsService } from './services/products.service';
import { IonicStorageModule } from '@ionic/storage-angular';
import { StorageService } from './services/storage.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  entryComponents: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    FormsModule
  ],
  providers: [
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      ProductsService,
      StorageService
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
