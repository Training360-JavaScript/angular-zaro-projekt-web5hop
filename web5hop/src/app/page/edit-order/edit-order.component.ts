
import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {

  order: Order = new Order;
  order$: Observable<Order> = this.activatedRoute.params.pipe(
    switchMap(params => this.orderService.get(params['id'])),
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService,
    private router: Router,
    private notifyService: NotificationService,
  ) { }

  ngOnInit() {
    this.order$ = this.activatedRoute.params.pipe(
      switchMap((params) =>
        this.orderService.get(params['id']))
    );
    this.order$.subscribe(data => {
      if (data) this.order = data
    });
  }

  onUpdate(order: Order): void {
    this.orderService.update(order).subscribe(
      order => this.router.navigate(['/', 'order']),
      err => console.error(err),
    );
    this.notifyService.showSuccess('Successfully updated', `Order ID ${this.order.id}`);
  }
  onCreate(order: Order) {
    this.orderService.create(order).subscribe(
      order => this.router.navigate(['/', 'order']),
    )
    this.notifyService.showSuccess(
      'Successfully created',
      `New Order`
    );
  }
}
