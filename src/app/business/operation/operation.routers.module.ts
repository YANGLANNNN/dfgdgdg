import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OperationComponent} from './operation.component';
import {FaultComponent} from './fault/fault.component';
import {EventComponent} from './event/event.component';
import {InspectionComponent} from './inspection/inspection.component';
const mainRoutes: Routes = [
  {
    path: '', component: OperationComponent,
    children: [
      {path: 'fault', component: FaultComponent},
      {path: 'event', component: EventComponent},
      {path: 'inspection', component: InspectionComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule],
  providers: []
})
export class OperationRoutersModule {}
