import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from './../../model/customer';
import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  customer$: Observable<Customer> = this.activatedRoute.params.pipe(
    switchMap( params => this.customerService.get(params['id']) ),
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onUpdate(customer: Customer): void {
    this.customerService.update(customer).subscribe(
      customer => this.router.navigate(['/', 'customers']),
      err => console.error(err),
    );
  }

}
