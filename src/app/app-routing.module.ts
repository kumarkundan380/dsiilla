import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { SiilafoundationComponent } from './siilafoundation/siilafoundation.component';
import { TeamComponent } from './team/team.component';
import { TermsComponent } from './terms/terms.component';
import { PartialComponent } from './layout/partial/partial.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  // {path: 'home', component: HomeComponent},
  // {path: 'about', component : AboutComponent},
  // {path: 'team', component: TeamComponent},
  // {path: 'siilafoundation', component: SiilafoundationComponent},
  // {path: 'faq', component: FaqComponent},
  // {path: 'terms', component: TermsComponent},
  // {path: 'jobs', component: JobsComponent},
  {
    path: '',
      component: PartialComponent,
        children: [
          {path: 'home', component: HomeComponent},
          {path: 'about', component : AboutComponent},
          {path: 'team', component: TeamComponent},
          {path: 'siilafoundation', component: SiilafoundationComponent},
          {path: 'faq', component: FaqComponent},
          {path: 'terms', component: TermsComponent},
          {path: 'jobs', component: JobsComponent},
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
