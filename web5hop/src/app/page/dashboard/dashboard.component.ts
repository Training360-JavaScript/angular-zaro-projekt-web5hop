import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { BillService } from './../../service/bill.service';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  billsNew: number = 0;
  billList$: Observable<Bill[]> = this.billService.getAll();
  productsActive: number = 0;
  productList$: Observable<Product[]> = this.productService.getAll()

  constructor(
    private billService: BillService,
    private productService: ProductService
    ) {}

  ngOnInit(): void {
    this.billList$.subscribe({
      next: (data) => {
        this.billsNew = data.filter((b) => b.status === 'new').length;
      },
    });
    this.productList$.subscribe({
      next: (data) => {
        this.productsActive = data.filter((b) => b.active === true).length;
      },
    });
  }
}
