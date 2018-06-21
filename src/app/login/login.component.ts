import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReqService} from '../shared/req.service';
import {GlobalService} from "../shared/global.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formModel: FormGroup;
  public tj;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private req: ReqService,
    private globalService: GlobalService
  ) {
    this.formModel = fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      mode: ['web', [Validators.required]],
    });

  }

  ngOnInit() {
    console.log(this.globalService.get('accessToken'));
  }

  public Submit(): void {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
      this.req.submitform(this.parameterSerializationForm(this.formModel.value))
        .subscribe(res => {
          console.log(res.token);
          this.tj = res.msg;
          if (this.tj === 14) {
            this.globalService.set('accessToken', res.token);
            console.log(this.globalService.get('accessToken'));
            this.router.navigate(['/home']);
            return;
          }
          if (this.tj === 10 && this.tj === 11 ) {
            alert('用户不存在或密码错误');
            return;
          }
          if (this.tj === 12) {
            alert('验证失败！');
            return;
          }
        });
    } else {
      alert('账号或密码不能为空!');
    }
  }


  // 表单参数序列化
  public parameterSerializationForm(form: JSON): string {
    let result: string;
    for (const f in form) {
      if (result) {
        result = result + f + '=' + form[f] + '&';
      } else {
        result = f + '=' + form[f] + '&';
      }
    }
    return result;
  }


}
