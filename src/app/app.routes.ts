import {Routes} from '@angular/router';
import {UsersComponent} from "./pages/user/users/users.component";
import {UserSaveComponent} from "./pages/user/user-save/user-save.component";
import {HomeComponent} from "./pages/home/home/home.component";
import {AnnouncesComponent} from "./pages/announce/announces/announces.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full'
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'users',
    component: UsersComponent
  }, {
    path: 'announce',
    component: AnnouncesComponent
  }
];
