import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './component/admin-login/admin-login.component';
import { KitchenStaffComponent } from './component/kitchen-staff/kitchen-staff.component';
import { HomeComponent } from './component/home/home.component';

  const routes: Routes = [
    // Other routes
    { path: 'adminlogin', component: AdminLoginComponent }, 
    { path: 'home', component: HomeComponent },
    { path: 'kitchenstafflogin', component: KitchenStaffComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
