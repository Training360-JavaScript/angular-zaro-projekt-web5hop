import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './page/bill/bill.component';
import { EditBillComponent } from './page/edit-bill/edit-bill.component';
import { CustomersComponent } from './page/customers/customers.component';
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
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'edit-product/:id',
    component: EditProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
