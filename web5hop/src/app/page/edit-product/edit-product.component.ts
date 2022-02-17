import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  product$: Observable<Product> = this.ar.params.pipe(
    switchMap(params => this.productService.get(params['id']))
  );

  constructor(
    private ar: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onUpdate(product: Product): void {
    this.productService.update(product).subscribe({
      next: product => this.router.navigate(['/', 'product']),
      error: err => console.error(err)
    });
  }

}
