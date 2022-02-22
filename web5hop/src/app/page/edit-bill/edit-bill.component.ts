import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable, switchMap } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-edit-bill',
  templateUrl: './edit-bill.component.html',
  styleUrls: ['./edit-bill.component.scss'],
})
export class EditBillComponent implements OnInit {
  bill$!: Observable<Bill>;
  bill: Bill = new Bill();

  constructor(
    private billService: BillService,
    private aRoute: ActivatedRoute,
    private router: Router,
    private notifyService: NotificationService
  ) {}

  ngOnInit() {
    this.bill$ = this.aRoute.params.pipe(
      switchMap((params) => this.billService.get(params['id']))
    );
    this.bill$.subscribe((data) => {
      if (data) this.bill = data;
    });
  }

  onCreate(bill: Bill) {
    this.billService
      .create(bill)
      .subscribe((bill) => this.router.navigate(['/', 'bill']));
    this.notifyService.showSuccess('Successfully created', `New Bill`);
  }

  onUpdate(bill: Bill, form: NgForm) {
    this.billService
      .update(bill)
      .subscribe((bill) => this.router.navigate(['/', 'bill']));
    this.notifyService.showSuccess(
      'Successfully updated',
      `Bill ID ${this.bill.id}`
    );
  }

  templateForm(value: any) {
    alert(JSON.stringify(value));
  }
}
