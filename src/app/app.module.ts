import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { SiilafoundationComponent } from './siilafoundation/siilafoundation.component';
import { JobsComponent } from './jobs/jobs.component';
import { FaqComponent } from './faq/faq.component';
import { TermsComponent } from './terms/terms.component';
import { FullComponent } from './layout/full/full.component';
import { BlankComponent } from './layout/blank/blank.component';
import { PartialComponent } from './layout/partial/partial.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    TeamComponent,
    SiilafoundationComponent,
    JobsComponent,
    FaqComponent,
    TermsComponent,
    FullComponent,
    BlankComponent,
    PartialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
