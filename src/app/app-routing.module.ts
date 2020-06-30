import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { UserViewComponent } from './user-view/user-view.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { ModeratorViewComponent } from './moderator-view/moderator-view.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { TentViewComponent } from './tent-view/tent-view.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  // {path: '', component: LoginComponent},
  {path: 'home', component:HomeViewComponent},
  {path: 'tent', component: TentViewComponent},
  {path: 'restaurant', component: RestaurantComponent},
  {
    path: 'about', component: AboutComponent
  },
  {path: 'register', component:RegisterComponent},
  {
    path: 'user', 
    component:UserViewComponent
    // canActivate: [AuthGuard]
  },
  {path: 'admin', component: AdminViewComponent, canActivate: [AuthGuard]},
  {path: 'moderator', component: ModeratorViewComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
