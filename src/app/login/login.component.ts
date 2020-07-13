import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  }
  displayName;
  public errorMsg = '';
  public employees: any = [];
  constructor(private fb: FormBuilder, private service: ApiService, private router: Router) {

  }

  ngForm = this.fb.group({
    MailId: ['', Validators.required],
    Password: ['', Validators.required]
  })

  get MailId() {
    return this.ngForm.controls['MailId'];
  }

  get Password() {
    return this.ngForm.controls['Password'];
  }

  enroll() {
    debugger;
    this.service.post(this.ngForm.value).subscribe(data => {
      debugger;
      if (data["token"] != null) {
        localStorage.setItem("token", data["token"]);
        localStorage.setItem("MailId", data["mailId"]);
        this.router.navigate(['/home']);
      }
      else {
        alert(data["data"]);
      }

    })

  }


  activate() {
    debugger;
    if (this.ngForm.value.MailId == "") {
      alert("Please provide Email Id");
      return true;
    }
    else {
      this.service.AccountVerify(this.ngForm.value).subscribe(data => {
        debugger;
        if (data["status"] == 200) {
          alert(data["data"]);
        }
        else {
          alert(data["data"]);
        }

      })

    }
  }

}
