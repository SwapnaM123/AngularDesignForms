import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private service: ApiService, private fb: FormBuilder, private router: Router) { }


  ngForm = this.fb.group({
    // Id: ['', Validators.required],
    FirstName: ['', Validators.required],
    MiddleName: ['', Validators.required],
    LastName: ['', Validators.required],
    MailId: ['', Validators.required], 
    MobileNo: ['', Validators.required],
    UserName: ['', Validators.required],
    Password: ['', Validators.required],
    ConfirmPassword: ['', Validators.required],
    // Token: ['', Validators.required],
    // Date: ['', Validators.required]
  })

  // get Id() {
  //   return this.ngForm.controls['Id'];
  // }

  get FirstName() {
    return this.ngForm.controls['FirstName'];
  }

  get MiddleName() {
    return this.ngForm.controls['MiddleName'];
  }
  get LastName() {
    return this.ngForm.controls['LastName'];
  }

  get MailId() {
    return this.ngForm.controls['MailId'];
  }

  get MobileNo() {
    return this.ngForm.controls['MobileNo'];
  }
  get UserName() {
    return this.ngForm.controls['UserName'];
  }

  get Password() {
    return this.ngForm.controls['Password'];
  }
  get ConfirmPassword() {
    return this.ngForm.controls['ConfirmPassword'];
  }

  // get Token() {
  //   return this.ngForm.controls['Token'];
  // }
  // get Date() {
  //   return this.ngForm.controls['Date'];
  // }
  ngOnInit() {
  }

  enroll() {
    this.ngForm.value.MobileNo = Number(this.ngForm.value.MobileNo);
    this.service.Registration(this.ngForm.value).subscribe(data => {
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

