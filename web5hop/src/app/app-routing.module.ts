import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './page/bill/bill.component';
import { CustomersComponent } from './page/customers/customers.component';

const routes: Routes = [
  {
    path: 'bill',
    component: BillComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
