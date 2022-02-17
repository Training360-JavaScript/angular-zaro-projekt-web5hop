import { EditOrderComponent } from './page/edit-order/edit-order.component';
import { OrderComponent } from './page/order/order.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './page/bill/bill.component';
import { EditBillComponent } from './page/edit-bill/edit-bill.component';
import { CustomersComponent } from './page/customers/customers.component';
import { EditCustomerComponent } from './page/edit-customer/edit-customer.component';
import { ProductComponent } from './page/product/product.component';
import { EditProductComponent } from './page/edit-product/edit-product.component';

const routes: Routes = [
  {
    path: 'bill',
    component: BillComponent,
  },
  {
    path: 'edit-bill/:id',
    component: EditBillComponent,
  },
  {
    path: 'customer',
    component: CustomersComponent,
  },
  {
    path: 'edit-customer/:id',
    component: EditCustomerComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'edit-product/:id',
    component: EditProductComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: 'edit-order/:id',
    component: EditOrderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
