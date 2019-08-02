import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = [];
  checkoutForm: FormGroup;
  
  private controlsConfig = {
    name: '',
    address: ''
  };

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { 
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(formData:{k:string, v:any}) {
    this.cartService.placeOrder(formData);
    this.checkoutForm.reset();
    this.items = [];
  }
}
