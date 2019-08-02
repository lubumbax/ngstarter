import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(private http: HttpClient) { }

  addToCart(product) {
    this.items.push(product);
  }
 
  getItems() {
    return this.items;
  }
 
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/data/shipping_costs.json');
  }

  placeOrder(data:{}) {
    this.clearCart();
    console.info('Your order has been submitted. Data:', data["name"], data["address"]);
  }
}
