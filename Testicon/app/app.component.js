System.register(['angular2/core', 'rxjs/Rx', 'angular2/router', './home/home.component', './about/about.component', './myprofile/myprofile.component', './user-register/register-form.component'], function(exports_1, context_1) {
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
    var core_1, router_1, home_component_1, about_component_1, myprofile_component_1, register_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (myprofile_component_1_1) {
                myprofile_component_1 = myprofile_component_1_1;
            },
            function (register_form_component_1_1) {
                register_form_component_1 = register_form_component_1_1;
            }],
        execute: function() {
            //import { ProductDetailComponent } from './products/product-detail.component';
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = 'Testicon Test Centre';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'tr-app',
                        template: "\n    <div>\n        <nav class='navbar navbar-default'>\n            <div class='container-fluid'>\n                <a class='navbar-brand'>{{pageTitle}}</a>\n                <ul class='nav navbar-nav'>\n                    <li><a [routerLink]=\"['Home']\">Home</a></li>\n                    <li><a [routerLink]=\"['About']\">About</a></li>\n                    <li><a [routerLink]=\"['MyProfile']\">My Profile</a></li>\n                    <li><a [routerLink]=\"['RegisterForm']\">Sign Up Here</a></li>\n                </ul>\n            </div>\n        </nav>\n        <div class='container'>\n            <router-outlet></router-outlet>\n        </div>\n     </div>\n     ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/about', name: 'About', component: about_component_1.AboutComponent },
                        { path: '/myprofile', name: 'MyProfile', component: myprofile_component_1.MyProfileComponent },
                        { path: '/register', name: 'RegisterForm', component: register_form_component_1.RegisterFormComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map