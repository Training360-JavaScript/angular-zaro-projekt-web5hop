import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
})
export class BillComponent implements OnInit {
  // data variables
  list$: Observable<Bill[]> = this.billService.getAll();
  billDefault: Bill = new Bill();
  keys: string[] = Object.keys(this.billDefault);

  // active header variable
  headerSortActive: string = 'id';

  // filter pipe params
  phrase: string = '';
  filterKey: string = '';

  // sort pipe params
  direction: string = 'asc';
  column: string = 'id';
  type: string = 'number';

  sortClickHandler(headerKey: string) {
    if (headerKey === this.headerSortActive) {
      this.direction = this.direction === 'asc' ? 'desc' : 'asc';
    } else {
      this.direction = 'asc';
    }
    this.headerSortActive = headerKey;
    this.setSortParams(this.direction, headerKey, 'number');
  }

  // TODO: need to clean up this
  setSortParams(direction: string, column: string, type: string) {
    this.direction = direction;
    this.column = column;
    // this.type = type;
    // let key =
    //   this.keys.find((key) => key.toLowerCase() === column.toLowerCase()) ||
    //   'id';
    // this.column = key;
    // this.type = typeof this.billDefault[key]
    this.type = typeof this.billDefault[column]

    // console.log(typeof this.billDefault[key])
  }

  constructor(private billService: BillService) {}

  ngOnInit(): void {}
}
