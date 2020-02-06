import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})

export class CartService {

  item = []

  constructor( private http: HttpClient ) {

  }

  getShippingPrices(){
    return this.http.get('/assets/shipping.json')
  }
  addCartItem(product){
    this.item.push(product)
    console.log(this.item)
  }
  getItems(){
    return this.item
  }
  clearCart(){
    this.item = []
      return this.item;
    
  }

}