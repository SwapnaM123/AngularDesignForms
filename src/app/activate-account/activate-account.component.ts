import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent {




  constructor(private fb: FormBuilder, private service: ApiService, private router: Router) {

  }

  ngForm = this.fb.group({
    MailId: ['', Validators.required],
    Token: ['', Validators.required]
  })

  get MailId() {
    return this.ngForm.controls['MailId'];
  }

  get Token() {
    return this.ngForm.controls['Token'];
  }

  enroll() {
    debugger;
    this.service.ActivateAccount(this.ngForm.value).subscribe(data => {
      debugger;
      if (data["status"] == 200) {
        alert(data["data"]);
        this.router.navigate(['/']);
      }
      else {
        alert(data["data"]);
      }
    })

  }


}
