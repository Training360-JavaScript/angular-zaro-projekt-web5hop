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
    this.type = type ? type : typeof this.billDefault[column]
  }

  onDelete(id: number) {
    this.billService.delete(id).subscribe(() => {});
    this.list$ = this.billService.getAll();
  }

  constructor(private billService: BillService) {}

  ngOnInit(): void {}
}
