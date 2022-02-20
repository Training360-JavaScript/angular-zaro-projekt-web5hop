import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../model/product';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService<Product> {

  constructor(
    public override http: HttpClient
  ) {
    super(http);
    this.entityName = 'product';
   }

   getAllbyProperty(key: string, value: any): Observable<Product[]> {
    return this.getAll().pipe(
      map((results) =>
        results.filter((r) => {
          return r[key] === value;
        })
      )
    );
  }
}
