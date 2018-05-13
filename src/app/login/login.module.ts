import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {LoginRoutersModule} from './login.routers.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutersModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
