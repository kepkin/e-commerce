import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  currentItem: number;

  constructor(public cartService: CartService) { }

  ngOnInit() {
  }

  addItem(n: number): void {
    let o = {id: n, name: '', image: '', description: 'des'};
  	
  	this.cartService.add(o, 1);
  }

}
