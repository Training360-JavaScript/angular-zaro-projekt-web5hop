import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { NotificationService } from 'src/app/service/notification.service';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productList$: Observable<Product[]> = this.productService.getAll();
  productDefault: Product = new Product();
  keys: string[] = Object.keys(this.productDefault);

  headerSortActive: string = 'id';

  phrase: string = '';
  filterKey: string = '';

  direction: string = 'asc';
  column: string = 'id';
  type: string = 'number';

  sortClickHandler(headerKey: string, dataType: string = '') {
    if (headerKey === this.headerSortActive) {
      this.direction = this.direction === 'asc' ? 'desc' : 'asc';
    } else {
      this.direction = 'asc';
    }
    this.headerSortActive = headerKey;
    this.setSortParams(this.direction, headerKey, dataType);
  }

  setSortParams(direction: string, column: string, type: string = '') {
    this.direction = direction;
    this.column = column;
    this.type = type ? type : typeof this.productDefault[column];
  }

  deleteProduct(id: number) {
    this.productService.delete(id).subscribe(() => {this.productList$ = this.productService.getAll()});

    setTimeout(() => {
      this.notifyService.showSuccess('Successfully deleted', `Product ID ${id}`)
    }, 1000);
  }

  constructor(
    private productService: ProductService,
    private notifyService: NotificationService
  ) { }

  ngOnInit(): void {
  }

}
