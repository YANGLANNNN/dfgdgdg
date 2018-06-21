import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRouterModule} from './app.router.module';
import {ReqService} from './shared/req.service';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {GlobalService} from './shared/global.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ReqService, GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
