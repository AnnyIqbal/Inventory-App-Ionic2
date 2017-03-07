import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { StorePage } from '../pages/store/store';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { TabsPage } from '../pages/tabs/tabs';
import { ProductRowComponent } from '../pages/product-row/product-row.component';
import { ProductsListComponent } from '../pages/products-list/products-list.component';

const config = {
    apiKey: "AIzaSyAONYjHE2LHnXYB2m0utQIORUkURrle1zU",
    authDomain: "ionic-inventoryapp.firebaseapp.com",
    databaseURL: "https://ionic-inventoryapp.firebaseio.com",
    storageBucket: "ionic-inventoryapp.appspot.com",
    messagingSenderId: "654746523864"
  };

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
    IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(config)
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
