import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
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

  deleteProduct(id: number, index: number) {
    this.productService.delete(id).subscribe(
      () => {this.productService.getAll().splice(index, 1)}
    )
  }

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

}
