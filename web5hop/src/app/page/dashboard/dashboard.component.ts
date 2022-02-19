import { Customer } from './../../model/customer';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  billsNew: number = 0;
  billList$: Observable<Bill[]> = this.billService.getAll();
  productsActive: number = 0;
  productList$: Observable<Product[]> = this.productService.getAll();
  customersActive: number = 0;
  customerList$: Observable<Customer[]> = this.customerService.getAll();
  ordersActive: number = 0;
  orderList$: Observable<Order[]> = this.orderService.getAll()

  constructor(
    private billService: BillService,
    private productService: ProductService,
    private customerService: CustomerService,
    private orderService: OrderService,
    ) {}

  ngOnInit(): void {
    this.billList$.subscribe({
      next: (data) => {
        this.billsNew = data.filter((d) => d.status === 'new').length;
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
    });
  }
}
