import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  errorMsg: any;

  constructor(private fb: FormBuilder, private service: ApiService, private router: Router) { }
  ngOnInit(): void {
  }

  ngForm = this.fb.group({
    MailId: ['', Validators.required],
  })

  get MailId() {
    return this.ngForm.controls['MailId'];
  }

  enroll() {
    debugger;
    this.service.forgotpassword(this.ngForm.value).subscribe(data => {
      debugger;
      if (data["success"] == true) {
        alert(data["data"]);
      }
      else {
        alert(data["data"]);
      }
    })
      , (error: any) => {
        this.errorMsg = error.statusText;
      }
  }

}
