import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  genders = ['male', 'female'];
  signupForm: FormGroup;  

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl('default', Validators.required),
        email: new FormControl(null, [Validators.email, Validators.required]),
        gender: new FormControl(null, Validators.required)  
      }),
      
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

}
