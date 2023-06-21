import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './component/admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from './service/admin-service.service';
import { KitchenStaffComponent } from './component/kitchen-staff/kitchen-staff.component';
import { KitchenStaffService } from './service/kitchen-staff.service';
import { HomeComponent } from './component/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    KitchenStaffComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AdminService,KitchenStaffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
