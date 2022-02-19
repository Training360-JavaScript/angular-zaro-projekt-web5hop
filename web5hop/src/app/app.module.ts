import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { BillComponent } from './page/bill/bill.component';
import { SortPipe } from './pipe/sort.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { EditBillComponent } from './page/edit-bill/edit-bill.component';
import { CustomersComponent } from './page/customers/customers.component';
import { EditCustomerComponent } from './page/edit-customer/edit-customer.component';
import { ProductComponent } from './page/product/product.component';
import { EditProductComponent } from './page/edit-product/edit-product.component';
import { NgChartsModule } from 'ng2-charts';

import { DashboardComponent } from './page/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BillComponent,
    SortPipe,
    FilterPipe,
    EditBillComponent,
    CustomersComponent,
    EditCustomerComponent,
    ProductComponent,
    EditProductComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
