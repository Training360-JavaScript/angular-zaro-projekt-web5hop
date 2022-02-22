import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from 'src/app/model/product';
import { NotificationService } from 'src/app/service/notification.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  product$!: Observable<Product>;
  product: Product = new Product();

  constructor(
    private ar: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private notifyService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.product$ = this.ar.params.pipe(
      switchMap(params => this.productService.get(params['id']))
    );
    this.product$.subscribe(data => {
      if(data) this.product = data
    });
  }

  createProduct(product: Product) {
    this.productService.create(product).subscribe({
      next: product => this.router.navigate(['/', 'product']),
      error: err => console.error(err)
    });
    this.notifyService.showSuccess('Successfully created', `New Product`);
  }

  updateProduct(product: Product): void {
    this.productService.update(product).subscribe({
      next: product => this.router.navigate(['/', 'product']),
      error: err => console.error(err)
    });
    this.notifyService.showSuccess(
      'Successfully updated',
      `Product ID ${this.product.id}`
    );
  }



}
