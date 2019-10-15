import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        children: [{ path: '', redirectTo: 'resume', pathMatch: 'full' }, { path: 'resume', component: ResumeComponent }]
      }
    ]
  },
  { path: '**', redirectTo: '/resume' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule {}
