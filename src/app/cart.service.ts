import { Injectable } from '@angular/core';
import { CartItem, Price } from './cart-item';


@Injectable()
export class CartService {

	items: { [id: number]: CartItem; } = {};
	services: CartItem[] = [];

	constructor() { }

	add(item: CartItem): void {
		if (this.items[item.id]) {
			this.items[item.id].count += item.count;
		} else {
			this.items[item.id] = item;
		}
	}

	sub(item_id: number, quantity: number): void {
		if (this.items[item_id]) {
			this.items[item_id].count -= quantity;

			if (this.items[item_id].count <= 0) {
				this.remove(item_id);
			}
		}
	}

	remove(item_id: number): void {
		if (this.items[item_id]) {
			delete this.items[item_id];
		}
	}

	get(): number[] {
		let res: number[] = [];

		let self = this;
		Object.keys(this.items).forEach(function(key) {
			res.push(self.items[key])
		});

		return res;
	}

	getItems(): CartItem[] {
		let res: CartItem[] = [];

		let self = this;
		Object.keys(this.items).forEach(function(key) {
			res.push(self.items[key])
		});

		return res;
	}

	//@TODO: add price calculation
	getTotal(): Price {
		let self = this;
		let objs: Price[] = [];

		Object.keys(this.items).forEach(function(key) {
			let item = self.items[key];
			objs.push(item.price.mult(item.count));
		});

		return Price.sum(objs);
	}

	//@TODO: Add shippment
	addService(item: CartItem): void {

	}
}
