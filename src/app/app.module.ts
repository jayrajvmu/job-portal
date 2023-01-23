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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
