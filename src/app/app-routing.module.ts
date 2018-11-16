import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsFeedComponent} from './screens/news-feed/news-feed.component';
import {EventsComponent} from './screens/events/events.component';
import {LoginComponent} from './screens/login/login.component';
import {RegisterComponent} from './screens/register/register.component';
import {LocationsAddComponent} from './screens/locations/locations-add/locations-add.component';
import {LocationsComponent} from './screens/locations/locations.component';
import {LocationsDetailsComponent} from './screens/locations/locations-details/locations-details.component';
import {LocationsEditComponent} from './screens/locations/locations-edit/locations-edit.component';
import {ActivityTypeComponent} from './screens/activity-type/activity-type.component';
import {ActivityTypeDetailsComponent} from './screens/activity-type/activity-type-details/activity-type-details.component';
import {ActivityTypeEditComponent} from './screens/activity-type/activity-type-edit/activity-type-edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/news', pathMatch: 'full'},
  {path: 'news', component: NewsFeedComponent},
  {path: 'events', component: EventsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'locations/add', component: LocationsAddComponent},
  {path: 'locations', component: LocationsComponent},
  {path: 'locations/:id', component: LocationsDetailsComponent},
  {path: 'locations/edit/:id', component: LocationsEditComponent},
  {path: 'activity-type', component: ActivityTypeComponent},
  {path: 'activity-type/:id', component: ActivityTypeDetailsComponent},
  {path: 'activity-type/edit/:id', component: ActivityTypeEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
