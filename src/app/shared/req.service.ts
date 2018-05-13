import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ReqService {

  constructor(private http: HttpClient) { }
  // 登陆验证
  public getLogin(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/user/login', body);
  }

  // 登陆验证
  public getDepartment(body): Observable<any> {
    return this.http.post('http://120.78.137.182/element-admin/department/find', body);
  }

}
