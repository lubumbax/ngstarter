import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts: Observable<any>;

  constructor(private cartService: CartService) { 
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  ngOnInit() {
  }

}
