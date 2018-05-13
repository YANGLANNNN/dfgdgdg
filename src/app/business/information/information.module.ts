import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './information.component';
import { HistoricalComponent } from './historical/historical.component';
import { CheckpointSummaryComponent } from './checkpoint-summary/checkpoint-summary.component';
import { PersonalComponent } from './personal/personal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InformationComponent, HistoricalComponent, CheckpointSummaryComponent, PersonalComponent]
})
export class InformationModule { }
