export class Product {
    //•	Product (id, name, type, catID, description, price, featured, active)
    [key: string]: any;
    id!: number;
    name: string = '';
    type: string = '';
    catID!: number;
    description: string = '';
    price!: number;
    featured!: boolean;
    active!: boolean;
}
