import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './page/bill/bill.component';
import { EditBillComponent } from './page/edit-bill/edit-bill.component';
import { CustomersComponent } from './page/customers/customers.component';
import { EditCustomerComponent } from './page/edit-customer/edit-customer.component';
import { ProductComponent } from './page/product/product.component';
import { EditProductComponent } from './page/edit-product/edit-product.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
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
    path: '**',
    component: DashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
