import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgxEchartsService} from 'ngx-echarts';
import {ReqService} from '../../shared/req.service';
import {GlobalService} from '../../shared/global.service';
declare let $;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public maplists: Array<any>;
  public Onlists = true;
  // show loading spinner:
  public mapLoaded = false;
  // empty option before geoJSON loaded:
  public options = {};
  constructor(
    private req: ReqService,
    public http: HttpClient,
    private es: NgxEchartsService,
    private globalService: GlobalService
  ) {
  }

  ngOnInit() {
    // fetch map geo JSON data from server
    /*console.log(this.globalService.get('accessToken'));
   this.http.post('http://120.78.137.182:8888/pipe-network/homepage', {accessToken: this.globalService.get('accessToken')}, {
     headers: {
    'Content-Type': 'application/x-www-form-urlencoded'},
   }).subscribe(data => console.log(data));*/
    this.getData();
  }

   public Obtain(): void {
      this.req.home({})
      .subscribe((value) => {
      console.log(value);
   });
  }

  public getData(): void {
    const that = this;
    console.log(that.globalService.get('accessToken'));
    $.ajax({
      url: 'http://120.78.137.182:8888/pipe-network/homepage',
      type: 'POST',
      async: false,
      cache: false,
      headers: {
        'accessToken': this.globalService.get('accessToken')
      },
      contentType: 'application/x-www-form-urlencoded',
      success: function(data) {
        console.log(data);
      },
      error: function (err) {
        console.log(err);
      }
    });
  }


}
