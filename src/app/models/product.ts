export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    tipo: string;

    constructor(id: number, name: string, description: string, price: number, imageUrl: string, tipo: string){
        this.id=id;
        this.name=name;
        this.description=description;
        this.price=price;
        this.imageUrl=imageUrl;
        this.tipo=tipo;
    }
}
