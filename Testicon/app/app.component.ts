import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

//import { ProductListComponent } from './products/product-list.component';
//import { ProductService } from './products/product.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MyProfileComponent } from './myprofile/myprofile.component';
import { RegisterFormComponent } from './user-register/register-form.component';


//import { ProductDetailComponent } from './products/product-detail.component';

@Component({
    selector: 'tr-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['Home']">Home</a></li>
                    <li><a [routerLink]="['About']">About</a></li>
                    <li><a [routerLink]="['MyProfile']">My Profile</a></li>
                    <li><a [routerLink]="['RegisterForm']">Sign Up Here</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
        { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
        { path: '/about', name: 'About', component: AboutComponent},
        { path: '/myprofile', name: 'MyProfile', component: MyProfileComponent},
        { path: '/register', name: 'RegisterForm', component: RegisterFormComponent }
    //{ path: '/product/:id', name: 'ProductDetail', component: ProductDetailComponent }
])
export class AppComponent {
    pageTitle: string = 'Testicon Test Centre';
}
