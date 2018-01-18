import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/mergeMap';

import { CartService } from './cart.service';


class BtxProductRow {
	PRODUCT_ID: number;
	QUANTITY: number;
}


@Injectable()
export class Btx24Service {

	prefix: string = '';
	token: string = '';

	constructor(private http: HttpClient) { }

	_getEndpoint(method: string): string {
		return "https://" + this.prefix + ".bitrix24.ru/rest/1/" + this.token + "/" + method;
	}

	makeDeal(cart: CartService): Observable<any> {

		let productRows: BtxProductRow[] = [];

		cart.getItems().forEach(item => {
			productRows.push({ PRODUCT_ID: item.id, QUANTITY: item.count })
		});

		let self = this;
		return self.http.post(this._getEndpoint('crm.deal.add'),
			{
				"fields": { "TITLE": "ab" }
			}
		).flatMap( data => {
			console.log("published deal with id");
			console.log(data);
			return self.http.post(this._getEndpoint('crm.deal.productrows.set'),
				{
					id: data.result,
					rows: productRows
				}
			);
		})
	}

	getGoods(section: number): void {
		this.http.post(this._getEndpoint('crm.product.list'),
			{
				order: { "NAME": "ASC" },
				filter: { "CATALOG_ID": 24 },
				select: ["ID", "NAME", "CURRENCY_ID", "PRICE"]
			}
		).subscribe(data => {
			console.log(data);
		})
	}
}
