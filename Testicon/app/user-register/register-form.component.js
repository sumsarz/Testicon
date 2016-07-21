System.register(['angular2/core', 'angular2/common', './validators'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, validators_1;
    var RegisterFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (validators_1_1) {
                validators_1 = validators_1_1;
            }],
        execute: function() {
            RegisterFormComponent = (function () {
                function RegisterFormComponent(formBuilder) {
                    this.formBuilder = formBuilder;
                    this.pageTitle = 'RegisterForm';
                    this.registrationForm = formBuilder.group({
                        name: ["", common_1.Validators.required],
                        address: ["", common_1.Validators.required],
                        postcode: ["", common_1.Validators.required],
                        mailingAddress: ["", common_1.Validators.required],
                        country: ["", common_1.Validators.required],
                        personalCodeNumber: ["", common_1.Validators.required],
                        // gender: ["", Validators.required],
                        telephoneNumber: ["", common_1.Validators.required],
                        email: ["", common_1.Validators.compose([common_1.Validators.required, validators_1.CustomValidators.custumEmailValidator])],
                        emailConfirm: ["", common_1.Validators.compose([common_1.Validators.required, validators_1.CustomValidators.custumEmailValidator])],
                        company: ["", common_1.Validators.required],
                        password: ["", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(6)])],
                        passwordConfirm: ["", common_1.Validators.required]
                    }, { validator: validators_1.CustomValidators.matchingPasswordsValidator('password', 'passwordConfirm') });
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
                RegisterFormComponent.prototype.doLogin = function (event) {
                    console.log(this.registrationForm.value);
                    event.preventDefault();
                };
                RegisterFormComponent = __decorate([
                    core_1.Component({
                        selector: 'register-form',
                        templateUrl: 'app/user-register/register-form.component.html',
                        styleUrls: ['app/user-register/register-form.component.css'],
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], RegisterFormComponent);
                return RegisterFormComponent;
            }());
            exports_1("RegisterFormComponent", RegisterFormComponent);
        }
    }
});
//# sourceMappingURL=register-form.component.js.map