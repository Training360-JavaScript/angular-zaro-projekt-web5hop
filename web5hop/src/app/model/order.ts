export class Order {
  // id, customerID, productID, amount, status: new|shipped|paid
  [key: string]: any;
  id: number = 0;
  customerID: number = 0;
  productID: number = 0;
  amount: number = 0;
  status: string = 'new' || 'shipped' || 'paid';
}
