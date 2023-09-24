import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = '';
  cardnumber = '';
  ccmonth = '';
  ccyear = '';
  cvc = '';
  formShowing = true;

  onSubmit(form: NgForm) {
    this.formShowing = false;
  }

  checkIfValid(input: NgModel) {
    if (!input.valid && (input.dirty || input.touched)) {
      return 'invalid:border-Error';
    } else return '';
  }

  returnToHome() {
    this.formShowing = true;
  }
}
