import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { CanLoginComponent } from './can-login/can-login.component';
import { CanRegistrationComponent } from './can-registration/can-registration.component';
import { CanUpdateProfileComponent } from './can-update-profile/can-update-profile.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CheckMailComponent } from './check-mail/check-mail.component';
import { CreateMailTemplateComponent } from './create-mail-template/create-mail-template.component';
import { EditJobPostComponent } from './edit-job-post/edit-job-post.component';
import { EmployerActionComponent } from './employer-action/employer-action.component';
import { EmployerHomeComponent } from './employer-home/employer-home.component';
import { EmployerLoginComponent } from './employer-login/employer-login.component';
import { EmployerMyaccountComponent } from './employer-myaccount/employer-myaccount.component';
import { ForgotPassOtpComponent } from './forgot-pass-otp/forgot-pass-otp.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { JobPostViewComponent } from './job-post-view/job-post-view.component';
import { JobpostComponent } from './jobpost/jobpost.component';
import { LoginComponent } from './login/login.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { PlansComponent } from './plans/plans.component';
import { RegisterComponent } from './register/register.component';
import { SendJobComponent } from './send-job/send-job.component';
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
  {path:"employerlogin",component:EmployerLoginComponent},
  {path:"editjobpost",component:EditJobPostComponent},
  {path:"sendjob",component:SendJobComponent},
  {path:"forgotpassotp",component:ForgotPassOtpComponent},
  {path:"checkmail",component:CheckMailComponent},






  {path:"canlogin",component:CanLoginComponent},
  {path:"canregister",component:CanRegistrationComponent},
  {path:"canupdateprofile",component:CanUpdateProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
