import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationComponent } from './operation.component';
import { FaultComponent } from './fault/fault.component';
import { InspectionComponent } from './inspection/inspection.component';
import {OperationRoutersModule} from './operation.routers.module';
import {NgxEchartsModule} from 'ngx-echarts';
import {UntreatedComponent} from './fault/untreated/untreated.component';
import {ProcessingComponent} from './fault/processing/processing.component';
import {DisposedComponent} from './fault/disposed/disposed.component';
import {PageoperationComponent} from '../../based/pageoperation/pageoperation.component';
import {PaginationModule} from 'ngx-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OperationRoutersModule,
    NgxEchartsModule,
    PaginationModule
  ],
  declarations: [
    OperationComponent,
    FaultComponent,
    InspectionComponent,
    UntreatedComponent,
    ProcessingComponent,
    DisposedComponent,
    PageoperationComponent
  ]
})
export class OperationModule { }
