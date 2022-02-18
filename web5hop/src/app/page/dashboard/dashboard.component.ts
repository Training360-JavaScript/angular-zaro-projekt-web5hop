import { BillService } from './../../service/bill.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/model/bill';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  unpaidBills: number = 0;
  list$: Observable<Bill[]> = this.billService.getAll();

  constructor(private billService: BillService) {}

  ngOnInit(): void {
    this.list$.subscribe({
      next: (data) => {
        this.unpaidBills = data.filter((b) => b.status === 'new').length;
      },
    });
  }
}
