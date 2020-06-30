import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { UserViewComponent } from './user-view/user-view.component';
import { ModeratorViewComponent } from './moderator-view/moderator-view.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { TentViewComponent } from './tent-view/tent-view.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { AboutComponent } from './about/about.component';
// import { CKEditorModule } from 'ckeditor4-angular';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    NavigationbarComponent,
    PageNotFoundComponent,
    AdminViewComponent,
    UserViewComponent,
    ModeratorViewComponent,
    HomeViewComponent,
    RegisterComponent,
    TentViewComponent,
    RestaurantComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CKEditorModule,
    AppRoutingModule
  ],
  providers: [AuthService,AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
