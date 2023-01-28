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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
