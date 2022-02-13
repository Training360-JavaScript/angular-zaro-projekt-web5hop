import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './page/bill/bill.component';
import { EditBillComponent } from './page/edit-bill/edit-bill.component';

const routes: Routes = [
  {
    path: 'bill',
    component: BillComponent,
  },
  {
    path: 'edit-bill/:id',
    component: EditBillComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
