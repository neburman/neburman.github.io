import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';

import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  tipos:string[] = ["camisetas", "sudaderas", "pantalones", "otros"]
  tipo:string = "productos";
  

  productList: Product[] = []
  
  constructor(private ProductService: ProductService, private router: Router) { }

  ngOnInit() {

    if(this.router.url === '/camisetas'){
      this.tipo=this.tipos[0];
      this.productList = this.ProductService.getCamisetas();
    }else if(this.router.url === '/sudaderas'){
      this.tipo=this.tipos[1];
      this.productList = this.ProductService.getSudaderas();
    }else if(this.router.url === '/pantalones'){
      this.tipo=this.tipos[2];
      this.productList = this.ProductService.getPantalones();
    }else if(this.router.url === '/otros'){
      this.tipo=this.tipos[3];
      this.productList = this.ProductService.getOtros();
    }else{this.productList = this.ProductService.getProducts();
    }
  }

}
