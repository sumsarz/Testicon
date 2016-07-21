System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CustomValidators;
    return {
        setters:[],
        execute: function() {
            CustomValidators = (function () {
                function CustomValidators() {
                }
                CustomValidators.custumEmailValidator = function (control) {
                    var emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
                    if (control.value && !emailRegexp.test(control.value)) {
                        return { invalidEmail: true };
                    }
                };
                CustomValidators.matchingPasswordsValidator = function (passwordKey, confirmPasswordKey) {
                    return function (group) {
                        var password = group.controls[passwordKey];
                        var confirmPassword = group.controls[confirmPasswordKey];
                        if (password.value !== confirmPassword.value) {
                            return {
                                mismatchedPasswords: true
                            };
                        }
                    };
                };
                CustomValidators.matchingEmailValidator = function (mailKey, confirmEmailKey) {
                    return function (group) {
                        var mail = group.controls[mailKey];
                        var confirmMail = group.controls[confirmEmailKey];
                        if (mail.value !== confirmMail.value) {
                            return {
                                mismatchedEmails: true
                            };
                        }
                    };
                };
                return CustomValidators;
            }());
            exports_1("CustomValidators", CustomValidators);
        }
    }
});
//# sourceMappingURL=validators.js.map