import { Component,Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
})
export class BillComponent implements OnInit {
  list$: Observable<Bill[]> = this.billService.getAll();
  billDefault: Bill = new Bill;
  keys: string[] = Object.keys(this.billDefault);

  // filter pipe params
  phrase: string = '';
  filterKey: string = '';

  // sort pipe params
  direction: string = 'asc';
  column: string = 'id';
  type: any = 'number';

  setSortParams(direction: string, column: string, type: string) {
    this.direction = direction;
    let key =
      this.keys.find((key) => key.toLowerCase() === column.toLowerCase()) ||
      'id';
    this.column = key;
    this.type = typeof this.billDefault[key]

    // console.log(typeof this.billDefault[key])
  }

  constructor(private billService: BillService) {}

  ngOnInit(): void {}
}
