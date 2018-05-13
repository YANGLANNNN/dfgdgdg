import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {HeaderComponent} from './header/header.component';
import {SiderComponent} from './sider/sider.component';
import { FooterComponent } from './footer/footer.component';
import {ModalModule} from 'ngx-bootstrap';
import {HomeRoutersModule} from './home.routers.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutersModule,
    ModalModule.forRoot()
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    SiderComponent,
    FooterComponent
  ]
})
export class HomeModule { }
