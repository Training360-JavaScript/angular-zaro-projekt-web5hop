import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
// import { Labels } from 'ng2-charts';
import { Customer } from './../../model/customer';

import { map, Observable } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { BillService } from './../../service/bill.service';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { CustomerService } from 'src/app/service/customer.service';
import { OrderService } from 'src/app/service/order.service';
import { Order } from 'src/app/model/order';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  productListActive$ = this.productService.getAllbyProperty('active', true).pipe(map(r => r.length));
  productListInactive$ = this.productService.getAllbyProperty('active', false).pipe(map(r => r.length));
  productLabel = ['Active', 'Inactive'];
  productTitle = "Products"
  customerListActive$ = this.customerService.getAllbyProperty('active', true).pipe(map(r => r.length));
  customerListInactive$ = this.customerService.getAllbyProperty('active', false).pipe(map(r => r.length));
  customerLabel = ['Active', 'Inactive'];
  customerTitle = "Customers"
  orderListNew$ = this.orderService.getAllbyProperty('status', 'new').pipe(map(r => r.length));
  orderListPaid$ = this.orderService.getAllbyProperty('status', 'paid').pipe(map(r => r.length));
  orderLabel = ['New', 'Paid'];
  orderTitle = "Orders"
  billListNew$ = this.billService.getAllbyProperty('status', 'new').pipe(map(r => r.length));
  billListPaid$ = this.billService.getAllbyProperty('status', 'paid').pipe(map(r => r.length));
  billLabel = ['New', 'Paid'];
  billTitle = "Bills"

  // billList$: Observable<Bill[]> = this.billService.getAll();
  /* billListNew$: Observable<number> = this.billList$.pipe(
    map((results) =>
      results.filter((r) => {
        return r.status == 'new'
      }).length
    )
  ); */

  /* billListPaid$: Observable<number> = this.billList$.pipe(
    map((results) =>
      results.filter((r) => {
        return r.status == 'paid'
      }).length
    )
  ); */

  constructor(
    private billService: BillService,
    private productService: ProductService,
    private customerService: CustomerService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    
  }
}
