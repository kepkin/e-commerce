import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Btx24Service } from '../btx24.service';
import { CartItem, Price, Currency } from '../cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  currentItem: number;

  constructor(public cartService: CartService, private btx24Service: Btx24Service) { }

  ngOnInit() {
  }

  addItem(n: number): void {
    let o = new CartItem(n, '', new Price(10, 0, Currency.RUB), '', 'des');
  	this.cartService.add(o);
  }

  subItem(item_id: number): void {
  	this.cartService.sub(item_id, 1);
  }

  getItems(): number[] {
  	return this.cartService.get();
  }


  delmeTest(): void {
  	this.btx24Service.makeDeal(this.cartService).subscribe( () => {
  		console.log("Finished deal");
  	});
  }

}
