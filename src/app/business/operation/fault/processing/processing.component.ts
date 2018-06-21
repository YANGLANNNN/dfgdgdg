import { Component, OnInit } from '@angular/core';
import {PageBody} from "../../../../shared/global.service";

@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.css']
})
export class ProcessingComponent implements OnInit {

  public pagesize: number;
  public pageBody: PageBody;
  constructor() { }

  ngOnInit() {
  }
  // 监控翻页事件
  public getPageBody(event): void {
    this.pageBody = event;
  }


}
