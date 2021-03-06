import { Customer } from './../model/customer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Address } from '../model/address';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerService extends BaseService<Customer> {
  constructor(
    public override http: HttpClient
  ) {
    super(http);
    this.entityName = 'customer';
  }

  createAddress(customer: Customer): Customer {
    if (typeof customer.address === 'object') {
      const address = new Address(customer.address);
      customer.address = address;
    }

    if (typeof customer.address === 'string') {
      const addressParts = (customer.address as unknown as string).split(' ');
      const zip = addressParts.shift();
      const street = addressParts.join(' ');
      customer.address = new Address();
      customer.address.zip = parseInt(zip || '');
      customer.address.street = street;
    }
    return customer;
  }

  override getAll(): Observable<Customer[]> {
    return super.getAll().pipe(
      map(list => {
        return list.map(c => this.createAddress(c) );
      }),
    );
  }

  override get(id: number): Observable<Customer> {
    return super.get(id).pipe(
      map( customer => this.createAddress(customer) )
    );
  }

  override update(customer: Customer): Observable<Customer> {
    return this.http.patch<Customer>(
      `${this.apiUrl}${this.entityName}/${customer.id}`,
      customer
    );
  }

  getAllbyProperty(key: string, value: any): Observable<Customer[]> {
    return this.getAll().pipe(
      map((results) =>
        results.filter((r) => {
          return r[key] === value;
        })
      )
    );
  }
}
