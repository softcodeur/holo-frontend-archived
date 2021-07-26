import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { PasswordModule } from "primeng/password";
import { DividerModule } from "primeng/divider";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    BrowserModule,
    CommonModule,
    LoginRoutingModule,
    BrowserAnimationsModule,
    PasswordModule,
    DividerModule,
    FormsModule
  ]
})
export class LoginModule { }
