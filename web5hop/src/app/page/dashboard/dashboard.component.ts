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

  // billList$: Observable<Bill[]> = this.billService.getAll();

  billListNew$ = this.billService.getAllbyProperty('status', 'new').pipe(map(r => r.length));
  billListPaid$ = this.billService.getAllbyProperty('status', 'paid').pipe(map(r => r.length));
  billLabel = ['New', 'Paid'];
  billTitle = "Bills"
  orderListNew$ = this.orderService.getAllbyProperty('status', 'new').pipe(map(r => r.length));
  orderListPaid$ = this.orderService.getAllbyProperty('status', 'paid').pipe(map(r => r.length));
  orderLabel = ['New', 'Paid'];
  orderTitle = "Orders"
  customerListActive$ = this.customerService.getAllbyProperty('active', true).pipe(map(r => r.length));
  customerListInactive$ = this.customerService.getAllbyProperty('active', false).pipe(map(r => r.length));
  customerLabel = ['Active', 'Inactive'];
  customerTitle = "Customers"
  productListActive$ = this.productService.getAllbyProperty('active', true).pipe(map(r => r.length));
  productListInactive$ = this.productService.getAllbyProperty('active', false).pipe(map(r => r.length));
  productLabel = ['Active', 'Inactive'];
  productTitle = "Products"

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

  productsActive: number = 0;
  productList$: Observable<Product[]> = this.productService.getAll();
  customersActive: number = 0;
  customerList$: Observable<Customer[]> = this.customerService.getAll();
  ordersActive: number = 0;
  orderList$: Observable<Order[]> = this.orderService.getAll();

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels = ['New', 'Paid'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataset[] = [
    { data: [65, 59], label: 'New Bills' },
  ];

  constructor(
    private billService: BillService,
    private productService: ProductService,
    private customerService: CustomerService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    // this.billListNew2$.subscribe()
    /* this.billList$.subscribe({
      next: (data) => {
        this.billsNew = data.filter((d) => d.status === 'new').length;
        this.billsPaid = data.filter((d) => d.status === 'paid').length;
      },
    });
    this.productList$.subscribe({
      next: (data) => {
        this.productsActive = data.filter((d) => d.active === true).length;
      },
    });
    this.customerList$.subscribe({
      next: (data) => {
        this.customersActive = data.filter((d) => d.active === true).length;
      },
    });
    this.orderList$.subscribe({
      next: (data) => {
        this.ordersActive = data.filter((d) => d.status === 'new').length;
      },
    }); */
  }
}
