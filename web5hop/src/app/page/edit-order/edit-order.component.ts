
import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

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
  }
  onCreate(order: Order) {
    this.orderService.create(order).subscribe(
      order => this.router.navigate(['/', 'order']),
    )
  }
}
