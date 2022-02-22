import { CustomerService } from 'src/app/service/customer.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { Address } from 'src/app/model/address';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customerList$: Observable<Customer[]> = this.customerService.getAll();
  customerDefault: Customer = new Customer();
  keys: string[] = Object.keys(this.customerDefault);

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
    this.type = type ? type : typeof this.customerDefault[column]
  }

  onDelete(id: number) {
    this.customerService.delete(id).subscribe(() => {
      this.customerList$ = this.customerService.getAll();
    });
    setTimeout(() => {
      this.notifyService.showSuccess('Successfully deleted', `Customer ID ${id}`)
    }, 1000);
  }

  constructor(
    private customerService: CustomerService,
    private notifyService: NotificationService,
  ) { }

  ngOnInit(): void {
  }

}
