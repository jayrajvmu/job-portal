import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { CanAdvancedDetailsComponent } from './can-advanced-details/can-advanced-details.component';
import { CanEducationalDetailsComponent } from './can-educational-details/can-educational-details.component';
import { CanEmailVerifyComponent } from './can-email-verify/can-email-verify.component';
import { CanHomeComponent } from './can-home/can-home.component';
import { CanIntrestedComponent } from './can-intrested/can-intrested.component';
import { CanJobDetailsComponent } from './can-job-details/can-job-details.component';
import { CanLoginComponent } from './can-login/can-login.component';
import { CanMobileVerifyComponent } from './can-mobile-verify/can-mobile-verify.component';
import { CanMyProfileComponent } from './can-my-profile/can-my-profile.component';
import { CanProfessionalDetailsComponent } from './can-professional-details/can-professional-details.component';
import { CanRecentSearchComponent } from './can-recent-search/can-recent-search.component';
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
import { EmployerRecentSearchComponent } from './employer-recent-search/employer-recent-search.component';
import { ForgotPassOtpComponent } from './forgot-pass-otp/forgot-pass-otp.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { JobPostViewComponent } from './job-post-view/job-post-view.component';
import { JobpostComponent } from './jobpost/jobpost.component';
import { LoginComponent } from './login/login.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { PagehomeComponent } from './pagehome/pagehome.component';
import { PlansComponent } from './plans/plans.component';
import { RegisterComponent } from './register/register.component';
import { SendJobComponent } from './send-job/send-job.component';
import { SendmailComponent } from './sendmail/sendmail.component';
import { UseExistingTemplateComponent } from './use-existing-template/use-existing-template.component';
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
  {path:"employerrecentsearch",component:EmployerRecentSearchComponent},
  {path:"useexistingtemplate",component:UseExistingTemplateComponent},
  {path:"pagehome",component:PagehomeComponent},






  {path:"canlogin",component:CanLoginComponent},
  {path:"canregister",component:CanRegistrationComponent},
  {path:"canupdateprofile",component:CanUpdateProfileComponent},
  {path:"canjobdetails",component:CanJobDetailsComponent},
  {path:"canemailverify",component:CanEmailVerifyComponent},
  {path:"canmobileverify",component:CanMobileVerifyComponent},
  {path:"canintrested",component:CanIntrestedComponent},
  {path:"canhome",component:CanHomeComponent},
  {path:"canmyprofile",component:CanMyProfileComponent},
  {path:"canrecentsearch",component:CanRecentSearchComponent},
  {path:"caneducationaldetails",component:CanEducationalDetailsComponent},
  {path:"canprofessionaldetails",component:CanProfessionalDetailsComponent},
  {path:"canadvanceddetails",component:CanAdvancedDetailsComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
