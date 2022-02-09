import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bill } from '../model/bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  apiUrl: string = environment.apiUrl;
  entityName: string = 'bill';
  constructor(private http: HttpClient) {}


  getAll(): Observable<Bill[]> {
    return this.http.get<Bill[]>(`${this.apiUrl}${this.entityName}`);
  }

  get(id: number): Observable<Bill> {
    return this.http.get<Bill>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  update(bill: Bill): Observable<Bill> {
    return this.http.patch<Bill>(
      `${this.apiUrl}${this.entityName}/${bill.id}`,
      bill
    );
  }

  remove(id: Number): Observable<any> {
    return this.http.delete<Observable<any>>(
      `${this.apiUrl}${this.entityName}/${id}`
    );
  }

  create(bill: Bill): Observable<Bill> {
    return this.http.post<Bill>(`${this.apiUrl}${this.entityName}`, bill);
  }
}
