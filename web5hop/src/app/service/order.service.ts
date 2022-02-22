import { Order } from './../model/order';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseService<Order>{



  constructor(
    public override http: HttpClient
  ) {
    super(http);
    this.entityName = 'order';
  }

  getAllbyProperty(key: string, value: any): Observable<Order[]> {
    return this.getAll().pipe(
      map((results) =>
        results.filter((r) => {
          return r[key] === value;
        })
      )
    );
  }

}
