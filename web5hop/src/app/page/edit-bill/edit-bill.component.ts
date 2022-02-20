import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';

@Component({
  selector: 'app-edit-bill',
  templateUrl: './edit-bill.component.html',
  styleUrls: ['./edit-bill.component.scss']
})
export class EditBillComponent implements OnInit {

  bill$!: Observable<Bill>;
  bill: Bill = new Bill();

  constructor(
    private billService:BillService,
    private aRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.bill$ = this.aRoute.params.pipe(
      switchMap((params) =>
        this.billService.get(params['id']))
    );
    this.bill$.subscribe(data => {
      if(data) this.bill = data
    });
  }

  onCreate(bill: Bill) {
    this.billService.create(bill).subscribe(
      bill => this.router.navigate(['/', 'bill']),
    )
  }

  onUpdate(bill: Bill) {
    this.billService.update(bill).subscribe(
      bill => this.router.navigate(['/', 'bill']),
    )
  }

  templateForm(value: any) {
    alert(JSON.stringify(value));
  }
}
