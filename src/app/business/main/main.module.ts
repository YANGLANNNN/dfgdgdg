import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {MainRoutersModule} from './main.routers.module';
import { BaiduMapModule } from 'angular2-baidu-map'


@NgModule({
  imports: [
    CommonModule,
    MainRoutersModule,
    BaiduMapModule.forRoot({ ak: '4ivlCHazUzg9r0aIbFO3Dk5oOLkosGql\t' })
  ],
  declarations: [
    MainComponent,
  ],
  providers: [],
})
export class MainModule { }
