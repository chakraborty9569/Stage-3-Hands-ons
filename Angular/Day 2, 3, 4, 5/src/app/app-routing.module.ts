import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { EditEmpFormBuilderComponent } from './edit-emp-form-builder/edit-emp-form-builder.component';
import { EditEmpReactiveComponent } from './edit-emp-reactive/edit-emp-reactive.component';
import { EditEmpTemplateDrivenComponent } from './edit-emp-template-driven/edit-emp-template-driven.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { QuantityIncrementComponent } from './quantity-increment/quantity-increment.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';

const routes: Routes = [
  {path: 'viewemp', component: ViewEmpComponent},
  {path: 'editemp', component: EditEmpComponent},
  {path: 'quantityincrement', component: QuantityIncrementComponent},
  {path: 'editemptemplatedriven', component: EditEmpTemplateDrivenComponent},
  {path: 'editempreactive', component: EditEmpReactiveComponent},
  {path: 'editempformbuilder', component: EditEmpFormBuilderComponent},
  {path: 'employeelist', component: EmployeeListComponent},
  {path: "edit-emp/:id", component: EmployeeInfoComponent},
  {path: 'editempreactive/:id', component: EditEmpReactiveComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
