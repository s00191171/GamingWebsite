import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private router: Router) { }
  
onSubmit() {
throw new Error('Method not implemented.');
}
  form: any;
  message: string = '';
  showError: boolean = false;
loginForm: any;
 



  ngOnInit(): void {
    this.form = new FormGroup({
    email: new FormControl(null, [
      Validators.minLength(4),
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null, [
      Validators.minLength(6),
      Validators.required,
    ]),
    })
}
get email():any {
  return this.form?.get('email');
}
get password():any {
  return this.form?.get('password');
}

login(){
  this.router.navigate(['/Games']);


}
}
