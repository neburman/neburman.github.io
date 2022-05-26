import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Camiseta antracita', 'Camiseta de manga corta color negro antracita jaspeado', 20, '/assets/img/productos/camiseta-antracita-front.png', 'camisetas'),
    new Product(2, 'Camiseta baseball', 'Camiseta de manga corta estilo baseball blanca con mangas negras', 20, '/assets/img/productos/camiseta-beisbol-front.png', 'camisetas'),
    new Product(3, 'Camiseta blanca', 'Camiseta blanca de manga corta básica', 20, '/assets/img/productos/camiseta-blanca-front.png', 'camisetas'),
    new Product(4, 'Manga larga negra', 'Camiseta de manga larga negra', 20, '/assets/img/productos/manga-larga-negra-front.png', 'camisetas'),
    new Product(5, 'Polo gris', 'Polo de manga corta color gris', 25, '/assets/img/productos/polo-gris-front.png', 'camisetas'),
    new Product(6, 'Polo negro', 'Polo de manga corta color negro', 25, '/assets/img/productos/polo-negro-front.png', 'camisetas'),
    
    //new Product(5, 'Gorro antracita', 'Gorro de lana color negro antracita jaspeado', 10, '/assets/img/productos/gorro-antracita.png', 'otro'),
    
    new Product(7, 'Pantalon corto negro', 'Pantalon corto de deporte color negro', 30, '/assets/img/productos/pantalon-corto-logo.png', 'pantalones'),
    new Product(8, 'Joggers negros', 'Pantalón de deporte largo de color negro', 40, '/assets/img/productos/pantalon-negro.png', 'pantalones'),
    
    new Product(9, 'Sudadera negra con cremallera', 'Sudadera negra con cremallera y capucha', 35, '/assets/img/productos/sudadera-cremallera-negra-front.png', 'sudaderas'),
    new Product(10, 'Sudadera gris ', 'Sudadera gris cerrada con capucha', 30, '/assets/img/productos/sudadera-gris-front.png', 'sudaderas'),
    new Product(11, 'Sudadera negra', 'Sudadera negra cerrada con capucha', 30, '/assets/img/productos/sudadera-negra-front.png', 'sudaderas'),
    
    new Product(12, 'Taza', 'Taza blanca con motivo OddFox', 5, '/assets/img/productos/taza.png', 'otros'),
    new Product(13, 'Gorra negra', 'Gorra negra con visera y logo OddFox', 10, '/assets/img/productos/gorra-negro.png', 'otros')
  ]

  camisetas: Product[] =[ 
    new Product(1, 'Camiseta antracita', 'Camiseta de manga corta color negro antracita jaspeado', 20, '/assets/img/productos/camiseta-antracita-front.png', 'camisetas'),
    new Product(2, 'Camiseta baseball', 'Camiseta de manga corta estilo baseball blanca con mangas negras', 20, '/assets/img/productos/camiseta-beisbol-front.png', 'camisetas'),
    new Product(3, 'Camiseta blanca', 'Camiseta blanca de manga corta básica', 20, '/assets/img/productos/camiseta-blanca-front.png', 'camisetas'),
    new Product(6, 'Manga larga negra', 'Camiseta de manga larga negra', 20, '/assets/img/productos/manga-larga-negra-front.png', 'camisetas'),
    new Product(9, 'Polo gris', 'Polo de manga corta color gris', 25, '/assets/img/productos/polo-gris-front.png', 'camisetas'),
    new Product(10, 'Polo negro', 'Polo de manga corta color negro', 25, '/assets/img/productos/polo-negro-front.png', 'camisetas'),
  ]

  pantalones: Product[]= [
    new Product(7, 'Pantalon corto negro', 'Pantalon corto de deporte color negro', 30, '/assets/img/productos/pantalon-corto-logo.png', 'pantalones'),
    new Product(8, 'Joggers negros', 'Pantalón de deporte largo de color negro', 40, '/assets/img/productos/pantalon-negro.png', 'pantalones'),

  ]

  sudaderas: Product[] = [
    new Product(11, 'Sudadera negra con cremallera', 'Sudadera negra con cremallera y capucha', 35, '/assets/img/productos/sudadera-cremallera-negra-front.png', 'sudaderas'),
    new Product(12, 'Sudadera gris ', 'Sudadera gris cerrada con capucha', 30, '/assets/img/productos/sudadera-gris-front.png', 'sudaderas'),
    new Product(13, 'Sudadera negra', 'Sudadera negra cerrada con capucha', 30, '/assets/img/productos/sudadera-negra-front.png', 'sudaderas'),
  ]

  otros: Product[] = [
    new Product(14, 'Taza', 'Taza blanca con motivo OddFox', 5, '/assets/img/productos/taza.png', 'otros'),
    new Product(4, 'Gorra negra', 'Gorra negra con visera y logo OddFox', 10, '/assets/img/productos/gorra-negro.png', 'otros')
  ]

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
  getCamisetas(): Product[]{
    return this.camisetas;
  }
  getSudaderas(): Product[]{
    return this.sudaderas;
  }
  getPantalones(): Product[]{
    return this.pantalones;
  }
  getOtros(): Product[]{
    return this.otros;
  }
}