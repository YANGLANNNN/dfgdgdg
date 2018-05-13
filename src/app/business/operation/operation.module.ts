import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationComponent } from './operation.component';
import { FaultComponent } from './fault/fault.component';
import { EventComponent } from './event/event.component';
import { InspectionComponent } from './inspection/inspection.component';
import {OperationRoutersModule} from './operation.routers.module';

@NgModule({
  imports: [
    CommonModule,
    OperationRoutersModule
  ],
  declarations: [OperationComponent, FaultComponent, EventComponent, InspectionComponent]
})
export class OperationModule { }
