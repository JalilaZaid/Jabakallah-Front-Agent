import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TermsComponent } from './terms/terms.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddClientFormComponent } from './add-client-form/add-client-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AgentListComponentComponent } from './agent-list-component/agent-list-component.component';
import { AgentHomeComponent } from './agent-home/agent-home.component';
import { AgentProfilComponent } from './agent-profil/agent-profil.component';


@NgModule({
    declarations: [
        AppComponent,
        ContactUsComponent,
        HomeComponent,
        LoginComponent,
        TermsComponent,
        NavMenuComponent,
        AddClientFormComponent,
        ChangePasswordComponent,
        NavBarComponent,
        AgentListComponentComponent,
        AgentHomeComponent,
        AgentProfilComponent,
       
    ],
    imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, ReactiveFormsModule, ToastrModule.forRoot()],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
