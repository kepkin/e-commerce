
export enum Currency {RUB, USD, EUR}

export class Price {
	amount: number;
	cents: number;
	currency: Currency;

	constructor(amount: number, cents: number, currency: Currency) {
		this.amount = amount;
		this.cents = cents;
		this.currency = currency;
	}

	static sum(objs: Price[]): Price {
		let amount: number = 0;
		let cents: number = 0;

		objs.forEach(function(o) {
			amount += o.amount;
			cents += o.cents;
		});

		amount += cents / 100;
		cents = cents % 100;

		return new Price(amount, cents, Currency.RUB);
	}

	mult(count: number): Price {
		let amount: number = this.amount * count;
		let cents: number = this.cents * count;

		amount += cents / 100;
		cents = cents % 100;

		return new Price(amount, cents, this.currency);
	}
}

export class CartItem {
  id: number;
  name: string;
  image: string;
  description: string;
  count: number;
  price: Price;

  constructor(id: number, name: string, price: Price, image: string, description: string) {
  	this.id = id;
  	this.name = name;
  	this.image = image;
  	this.description = description;
  	this.count = 1;
  	this.price = price;
  }
}