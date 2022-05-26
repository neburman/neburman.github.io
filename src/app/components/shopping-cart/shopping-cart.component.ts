import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';

import { Product } from 'src/app/models/product';

import { ProductService } from 'src/app/services/product.service'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  productList: any[] = [
    //{id:1, productId: 3, productName:'Test1', qty:3, price:200},
    //{id:2, productId: 7, productName:'Test2', qty:6, price:120}
  ];

  cartTotal = 0
  cartItems: any;

  constructor(private msg:MessengerService) { }

  ngOnInit() {
    this.msg.getMsg().subscribe((product: any) => {
      this.addProductToCart(product)
    })
  }
  addProductToCart(product: Product) {

    let productExists = false

    for (let i in this.productList) {
      if (this.productList[i].productId === product.id) {
        this.productList[i].qty++
        productExists = true
        break;
      }
    }

    if (!productExists) {
      this.productList.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      })
    }

    this.cartTotal = 0
    this.productList.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }
  removeProductFromCart(product: Product) {

  }

  /*toggle() {
    this. = !this.show;
  }*/

}

/*interface itemIntefaz{
  id:number;
  productId:number;
  productName:string;
  qty:number;
  price:number;
}*/
