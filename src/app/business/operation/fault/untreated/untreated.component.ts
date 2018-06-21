import { Component, OnInit } from '@angular/core';
import {PageBody} from "../../../../shared/global.service";

@Component({
  selector: 'app-untreated',
  templateUrl: './untreated.component.html',
  styleUrls: ['./untreated.component.css']
})
export class UntreatedComponent implements OnInit {

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
