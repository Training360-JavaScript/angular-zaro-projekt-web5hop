export class Bill {
  // Bill (id, orderID, amount, status: new|paid)
  [key: string]: number | string;
  id: number = 0;
  orderID: number = 0;
  amount: number = 0;
  status: string = 'new' || 'paid';
}
