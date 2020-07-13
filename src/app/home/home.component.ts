import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  errorMsg: any;

  constructor(private service: ApiService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }



  ngForm = this.fb.group({
    MailId: [localStorage.getItem('MailId')]
  })




  enroll() {
    debugger;

    this.service.logout(this.ngForm.value).subscribe(data => {
      debugger;
      if (data["success"] == true) {
        alert(data["data"]);
        this.router.navigate(["/login"]);
        localStorage.removeItem("token");
        localStorage.removeItem("MailId");
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
