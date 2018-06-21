import { Component, OnInit } from '@angular/core';
import {PageBody} from '../../../../shared/global.service';
import {ReqService} from '../../../../shared/req.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-disposed',
  templateUrl: './disposed.component.html',
  styleUrls: ['./disposed.component.css']
})
export class DisposedComponent implements OnInit {
  public pagesize: number;
  public pageBody: PageBody;
  public disposeds: Array<any>;
  public disposedist: Observable<any>;

  constructor(
    private req: ReqService,
  ) {
    this.Obtain();
  }

  ngOnInit() {
  }
  // 监控翻页事件
  public getPageBody(event): void {
    this.pageBody = event;
    this.Obtain();
  }

  // 已处理的数据获取
  public Obtain(): void {
    this.req.Fault(this.parameterSerialization(this.pageBody))
      .subscribe((value) => {
        console.log(this.pageBody);
        console.log(value);
        this.disposedist = value.values;
        this.pagesize = value.pagesize;
      });


  }

  // 翻页参数序列化
  public parameterSerialization(obj: PageBody): string {
    let result: string;
    for (const prop in this.pageBody) {
      if (this.pageBody.hasOwnProperty(prop)) {
        if (result) {
          result = result + prop + '=' + this.pageBody[prop] + '&';
        } else {
          result = prop + '=' + this.pageBody[prop] + '&';
        }
      }
    }
    return result;
  }
}
