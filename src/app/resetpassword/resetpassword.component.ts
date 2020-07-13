import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private service: ApiService, private fb: FormBuilder, private router: Router) { }


  ngForm = this.fb.group({
    MailId: ['', Validators.required],
    Password: ['', Validators.required],
    ConfirmPassword: ['', Validators.required],
    Token: ['', Validators.required]
  })

  get MailId() {
    return this.ngForm.controls['MailId'];
  }

  get Password() {
    return this.ngForm.controls['Password'];
  }

  get ConfirmPassword() {
    return this.ngForm.controls['ConfirmPassword'];
  }

  get Token() {
    return this.ngForm.controls['Token'];
  }

  ngOnInit() {
  }

  enroll() {
    debugger;
    this.service.resetpassword(this.ngForm.value).subscribe(data => {
      debugger;
      if (data["status"] == 200) {
        alert(data["data"]);
        this.router.navigate(["/login"]);
      }
      else {
        alert(data["data"]);
      }
    })

  }




}
