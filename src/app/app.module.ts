import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StorePage } from '../pages/store/store';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { TabsPage } from '../pages/tabs/tabs';
import { ProductRowComponent } from '../pages/product-row/product-row.component';
import { ProductsListComponent } from '../pages/products-list/products-list.component';

@NgModule({
  declarations: [
    MyApp,
    StorePage,
    WishlistPage,
    TabsPage,
    ProductRowComponent,
    ProductsListComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StorePage,
    WishlistPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
