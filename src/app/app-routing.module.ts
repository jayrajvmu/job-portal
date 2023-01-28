import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { CanRegistrationComponent } from './can-registration/can-registration.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CreateMailTemplateComponent } from './create-mail-template/create-mail-template.component';
import { EmployerActionComponent } from './employer-action/employer-action.component';
import { EmployerHomeComponent } from './employer-home/employer-home.component';
import { EmployerMyaccountComponent } from './employer-myaccount/employer-myaccount.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { JobPostViewComponent } from './job-post-view/job-post-view.component';
import { JobpostComponent } from './jobpost/jobpost.component';
import { LoginComponent } from './login/login.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { PlansComponent } from './plans/plans.component';
import { RegisterComponent } from './register/register.component';
import { SendmailComponent } from './sendmail/sendmail.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"jobpost",component:JobpostComponent},
  {path:"createmailtemplate",component:CreateMailTemplateComponent},
  {path:"sendmail",component:SendmailComponent},
  {path:"plans",component:PlansComponent},
  {path:"addplan",component:AddPlanComponent},
  {path:"forgotpassword",component:ForgotPasswordComponent},
  {path:"verifyotp",component:VerifyOtpComponent},
  {path:"newpassword",component:NewPasswordComponent},
  {path:"changepassword",component:ChangePasswordComponent},
  {path:"myaccount",component:EmployerMyaccountComponent},
  {path:"jobpostview",component:JobPostViewComponent},
  {path:"employeraction",component:EmployerActionComponent},
  {path:"candidatedetails",component:CandidateDetailsComponent},
  {path:"employerhome",component:EmployerHomeComponent},







  {path:"canregister",component:CanRegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
