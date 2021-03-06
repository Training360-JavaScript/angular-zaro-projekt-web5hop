import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/model/order';
import { NotificationService } from 'src/app/service/notification.service';
import { OrderService } from 'src/app/service/order.service';


@Component({
  selector: 'app-product',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {


  orderList$: Observable<Order[]> = this.orderService.getAll();
  orderDefault: Order = new Order();
  keys: string[] = Object.keys(this.orderDefault);

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
    this.type = type ? type : typeof this.orderDefault[column];
  }
  onDelete(id: number) {
    this.orderService.delete(id).subscribe(() => {
      this.orderList$ = this.orderService.getAll();
    });
    setTimeout(() => {
      this.notifyService.showSuccess('Successfully deleted', `Bill ID ${id}`)
    }, 1000);
  }
  constructor(
    private orderService: OrderService,
    private notifyService: NotificationService
  ) { }

  ngOnInit(): void {
  }

}
