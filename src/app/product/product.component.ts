import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { MessengerService } from '../services/messenger.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  productItem!: Product;

  constructor(private msg:MessengerService) { }

  ngOnInit(): void {
  }

  handleAddToCart(){
    this.msg.sendMsg(this.productItem)
  }

}
