import { RouterModule } from '@angular/router';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './auth.guard'
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CartItemComponent } from './components/shopping-cart/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    FooterComponent,
    SignupComponent,
    HomeComponent,
    CarouselComponent,
    AboutComponent,
    ProductsComponent,
    ProductComponent,
    ContactComponent,
    ShoppingCartComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MdbCarouselModule,
    RouterModule.forRoot([
      {path:'login', component: LoginComponent, canActivate: [AuthGuard]},
      {path:'signup', component: SignupComponent, canActivate: [AuthGuard]},
      {path:'main', component: AppComponent},
      {path:'home', component: HomeComponent},
      {path:'', component: HomeComponent},
      {path:'contact', component: ContactComponent},
      {path:'about', component: AboutComponent},
      {path:'productos', component: ProductsComponent},
      {path:'camisetas', component: ProductsComponent},
      {path:'pantalones', component: ProductsComponent},
      {path:'sudaderas', component: ProductsComponent},
      {path:'otros', component: ProductsComponent},
    ])
  ],
  providers: [AuthService, UserService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
