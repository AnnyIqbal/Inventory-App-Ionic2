import { Component } from '@angular/core';
import { StorePage } from '../store/store';
import { WishlistPage } from '../wishlist/wishlist';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  
  tab1Root: any = StorePage;
  tab2Root: any = WishlistPage;

  constructor() {

  }
}
