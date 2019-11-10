import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventFourthPageComponent } from './pages/event-fourth/event-fourth-page.component';
import { OrganizingTeamPageComponent } from './pages/organizing-team/organizing-team-page.component';
import { PartnersPageComponent } from './pages/partners/partners-page.component';
import { NotFoundPageComponent } from './pages/not-found/not-found-page.component';

const routes: Routes = [
  { path: '', component: EventFourthPageComponent },
  { path: 'organizing-team', component: OrganizingTeamPageComponent },
  { path: 'partners', component: PartnersPageComponent},
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
