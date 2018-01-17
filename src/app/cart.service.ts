import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';


interface Map<T> {
    [key: string]: T;
}
let keys: keyof Map<number>; // string


@Injectable()
export class CartService {

  items: { [id: number]: number; } = { };

  constructor() { }

  add(item: CartItem, count: number): void {
    this.items[item.id] = count;
    console.log(Object.keys(this.items));
  }

}
