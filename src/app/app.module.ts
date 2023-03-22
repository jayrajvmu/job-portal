import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JobpostComponent } from './jobpost/jobpost.component';
import { EmployerMyaccountComponent } from './employer-myaccount/employer-myaccount.component';
import { CreateMailTemplateComponent } from './create-mail-template/create-mail-template.component';
import { SendmailComponent } from './sendmail/sendmail.component';
import { PlansComponent } from './plans/plans.component';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CanRegistrationComponent } from './can-registration/can-registration.component';
import { JobPostViewComponent } from './job-post-view/job-post-view.component';
import { EmployerActionComponent } from './employer-action/employer-action.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { EmployerHomeComponent } from './employer-home/employer-home.component';
import { EmployerLoginComponent } from './employer-login/employer-login.component';
import { EditJobPostComponent } from './edit-job-post/edit-job-post.component';
import { SendJobComponent } from './send-job/send-job.component';
import { ForgotPassOtpComponent } from './forgot-pass-otp/forgot-pass-otp.component';
import { CheckMailComponent } from './check-mail/check-mail.component';
import { CanLoginComponent } from './can-login/can-login.component';
import { CanUpdateProfileComponent } from './can-update-profile/can-update-profile.component';
import { CanJobDetailsComponent } from './can-job-details/can-job-details.component';
import { CanEmailVerifyComponent } from './can-email-verify/can-email-verify.component';
import { CanMobileVerifyComponent } from './can-mobile-verify/can-mobile-verify.component';
import { CanIntrestedComponent } from './can-intrested/can-intrested.component';
import { CanHomeComponent } from './can-home/can-home.component';
import { CanMyProfileComponent } from './can-my-profile/can-my-profile.component';
import { CanRecentSearchComponent } from './can-recent-search/can-recent-search.component';
import { EmployerRecentSearchComponent } from './employer-recent-search/employer-recent-search.component';
import { UseExistingTemplateComponent } from './use-existing-template/use-existing-template.component';
import { CanEducationalDetailsComponent } from './can-educational-details/can-educational-details.component';
import { CanProfessionalDetailsComponent } from './can-professional-details/can-professional-details.component';
import { CanAdvancedDetailsComponent } from './can-advanced-details/can-advanced-details.component';
import { PagehomeComponent } from './pagehome/pagehome.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    JobpostComponent,
    EmployerMyaccountComponent,
    CreateMailTemplateComponent,
    SendmailComponent,
    PlansComponent,
    AddPlanComponent,
    ForgotPasswordComponent,
    VerifyOtpComponent,
    NewPasswordComponent,
    ChangePasswordComponent,
    CanRegistrationComponent,
    JobPostViewComponent,
    EmployerActionComponent,
    CandidateDetailsComponent,
    EmployerHomeComponent,
    EmployerLoginComponent,
    EditJobPostComponent,
    SendJobComponent,
    ForgotPassOtpComponent,
    CheckMailComponent,
    CanLoginComponent,
    CanUpdateProfileComponent,
    CanJobDetailsComponent,
    CanEmailVerifyComponent,
    CanMobileVerifyComponent,
    CanIntrestedComponent,
    CanHomeComponent,
    CanMyProfileComponent,
    CanRecentSearchComponent,
    EmployerRecentSearchComponent,
    UseExistingTemplateComponent,
    CanEducationalDetailsComponent,
    CanProfessionalDetailsComponent,
    CanAdvancedDetailsComponent,
    PagehomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
