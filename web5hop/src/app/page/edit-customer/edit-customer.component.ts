import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from './../../model/customer';
import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  customer$: Observable<Customer> = this.activatedRoute.params.pipe(
    switchMap( params => this.customerService.get(params['id']) ),
  );
  customer: Customer = new Customer();

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router,
    private notifyService: NotificationService
  ) { }

  ngOnInit(): void {
    this.customer$.subscribe(data => {
      if(data) this.customer = data
    });
  }

  onCreate(customer: Customer): void {
    this.customerService.create(customer).subscribe(
      customer => this.router.navigate(['/', 'customer']),
    )
    this.notifyService.showSuccess('Successfully created', `New Customer`);
  }

  onUpdate(customer: Customer): void {
    this.customerService.update(customer).subscribe(
      customer => this.router.navigate(['/', 'customer']),
      err => console.error(err),
    );
    this.notifyService.showSuccess(
      'Successfully updated',
      `Customer ID ${this.customer.id}`
    );
  }

}
