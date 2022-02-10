export class Product {
    //•	Product (id, name, type, catID, description, price, featured, active)
    [key: string]: any;
    id: number = 0;
    name: string = '';
    type: string = '';
    catID: number = 0;
    description: string = '';
    price: number = 0;
    featured: boolean = false;
    active: boolean = true;
}
