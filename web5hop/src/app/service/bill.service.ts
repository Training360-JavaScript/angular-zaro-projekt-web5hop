import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Bill } from '../model/bill';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class BillService extends BaseService<Bill> {
  constructor(public override http: HttpClient) {
    super(http);
    this.entityName = 'bill';
  }

  getAllbyProperty(key: string, value: any): Observable<Bill[]> {
    return this.getAll().pipe(
      map((results) =>
        results.filter((r) => {
          return r[key] === value;
        })
      )
    );
  }
}
