import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { FormContactComponent } from './shared/forms/form-contact/form-contact.component';
import { SectionComponent } from './shared/layout/section/section.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './shared/layout/menu/menu.component';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { LevelSocialComponent } from './shared/sections/level-social/level-social.component';
import { PhotoGridComponent } from './shared/sections/photo-grid/photo-grid.component';
import { HeaderVideoComponent } from './shared/layout/header-video/header-video.component';
import { BiographyComponent } from './shared/sections/biography/biography.component';
import { HeroDownloadComponent } from './shared/sections/hero-download/hero-download.component';
import { ParticlesComponent } from './shared/layout/particles/particles.component';
import { HeroTicketingComponent } from './shared/sections/hero-ticketing/hero-ticketing.component';
import { EventFourthComponent } from './shared/sections/event-fourth/event-fourth.component';
import { EventFourthPageComponent } from './pages/event-fourth/event-fourth-page.component';
import { NotFoundPageComponent } from './pages/not-found/not-found-page.component';
import { OrganizingTeamPageComponent } from './pages/organizing-team/organizing-team-page.component';
import { PartnersPageComponent } from './pages/partners/partners-page.component';
import { TeamMemberComponent } from './shared/components/team-member/team-member.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormContactComponent,
    SectionComponent,
    MenuComponent,
    NavbarComponent,
    LevelSocialComponent,
    PhotoGridComponent,
    HeaderVideoComponent,
    BiographyComponent,
    HeroDownloadComponent,
    ParticlesComponent,
    ParticlesComponent,
    HeroTicketingComponent,
    EventFourthComponent,
    EventFourthPageComponent,
    NotFoundPageComponent,
    OrganizingTeamPageComponent,
    PartnersPageComponent,
    TeamMemberComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
