import { Component } from 'angular2/core';
import {FORM_DIRECTIVES, ControlGroup, Control, AbstractControl, FormBuilder, Validators} from 'angular2/common';
import { CustomValidators } from './validators';

@Component({
    selector: 'register-form',
    templateUrl: 'app/user-register/register-form.component.html',
    styleUrls: ['app/user-register/register-form.component.css'],
    directives: [FORM_DIRECTIVES]

})
export class RegisterFormComponent {
    public pageTitle: string = 'RegisterForm';

    name: AbstractControl;
    address: AbstractControl;
    postcode: AbstractControl;
    mailingAddress: AbstractControl;
    country: AbstractControl;
    personalCodeNumber: AbstractControl;
    persooptionsRadiosGender: AbstractControl;
    telephoneNumber: AbstractControl;
    email: AbstractControl;
    emailConfirm: AbstractControl;
    company: AbstractControl;
    password: AbstractControl;
    passwordConfirm: AbstractControl;

    registrationForm: ControlGroup;
    

    constructor(private formBuilder: FormBuilder) {



        this.registrationForm = formBuilder.group({
            name: ["", Validators.required],
            address: ["", Validators.required],
            postcode: ["", Validators.required],
            mailingAddress: ["", Validators.required],
            country: ["", Validators.required],
            personalCodeNumber: ["", Validators.required],
           // gender: ["", Validators.required],
            telephoneNumber: ["", Validators.required],
            email: ["", Validators.compose([Validators.required, CustomValidators.custumEmailValidator])],
            emailConfirm: ["", Validators.compose([Validators.required, CustomValidators.custumEmailValidator])],
            company: ["", Validators.required],
            password: ["", Validators.compose([Validators.required, Validators.minLength(6)])],
            passwordConfirm: ["", Validators.required]

        }, { validator: CustomValidators.matchingPasswordsValidator('password', 'passwordConfirm') });
        

        //this.name = this.registrationForm.controls['name'];
       // this.address = this.registrationForm.controls['address'];
        //this.postcode = this.registrationForm.controls['postcode'];
        //this.mailingAddress = this.registrationForm.controls['mailingAddress'];
        //this.country = this.registrationForm.controls['country'];
        //this.personalCodeNumber = this.registrationForm.controls['personalCodeNumber'];
        //this.persooptionsRadiosGender = this.registrationForm.controls['persooptionsRadiosGender'];
        //this.telephoneNumber = this.registrationForm.controls['telephoneNumber'];
       // this.email = this.registrationForm.controls['email'];
        //this.emailConfirm = this.registrationForm.controls['emailConfirm'];
        //this.company = this.registrationForm.controls['company'];
       // this.password = this.registrationForm.controls['password'];
        //this.passwordConfirm = this.registrationForm.controls['passwordConfirm'];
    }
  
    
    doLogin(event) {
        console.log(this.registrationForm.value);
        event.preventDefault();
    }


}
