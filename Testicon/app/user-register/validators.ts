import {ControlGroup, Control} from 'angular2/common';


export class CustomValidators {

  
    static custumEmailValidator(control: Control): { [key: string]: any } {
        var emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control.value && !emailRegexp.test(control.value)) {
            return { invalidEmail: true };
        }
    }


    static matchingPasswordsValidator(passwordKey: string, confirmPasswordKey: string) {
        return (group: ControlGroup): { [key: string]: any } => {
            let password = group.controls[passwordKey];
            let confirmPassword = group.controls[confirmPasswordKey];

            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        }
    }

    static matchingEmailValidator(mailKey: string, confirmEmailKey: string) {
        return (group: ControlGroup): { [key: string]: any } => {
            let mail = group.controls[mailKey];
            let confirmMail = group.controls[confirmEmailKey];

            if (mail.value !== confirmMail.value) {
                return {
                    mismatchedEmails: true
                };
            }
        }
    }
}