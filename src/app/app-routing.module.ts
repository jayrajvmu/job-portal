import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { CreateMailTemplateComponent } from './create-mail-template/create-mail-template.component';
import { EmployerMyaccountComponent } from './employer-myaccount/employer-myaccount.component';
import { JobpostComponent } from './jobpost/jobpost.component';
import { LoginComponent } from './login/login.component';
import { PlansComponent } from './plans/plans.component';
import { RegisterComponent } from './register/register.component';
import { SendmailComponent } from './sendmail/sendmail.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"jobpost",component:JobpostComponent},
  {path:"createmailtemplate",component:CreateMailTemplateComponent},
  {path:"sendmail",component:SendmailComponent},
  {path:"plans",component:PlansComponent},
  {path:"addplan",component:AddPlanComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
