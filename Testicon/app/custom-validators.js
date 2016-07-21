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
                CustomValidators.emailValidator = function (control) {
                    if (!control.value.match(/[a-zA-Z][a-zA-Z0-9]/)) {
                        return { 'invalidEmailAddress': true };
                    }
                };
                return CustomValidators;
            }());
            exports_1("CustomValidators", CustomValidators);
        }
    }
});
//# sourceMappingURL=custom-validators.js.map