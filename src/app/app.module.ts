import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CompleteComponent } from './Components/complete/complete.component';
import { ContactInformationComponent } from './Components/contact-information/contact-information.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http'

const route: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'contact-information', component: ContactInformationComponent },
  { path: 'complete', component: CompleteComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    ContactInformationComponent,
    CompleteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(route),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
