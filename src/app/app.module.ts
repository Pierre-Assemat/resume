import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { SkillComponent } from './skill/skill.component';
import { LanguageComponent } from './language/language.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { StudyComponent } from './study/study.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeComponent,
    ContactComponent,
    SkillComponent,
    LanguageComponent,
    WorkExperienceComponent,
    StudyComponent
  ],
  imports: [BrowserModule, HttpClientModule, FlexLayoutModule, AppRoutingModule, RouterModule, BrowserAnimationsModule, MatIconModule],
  bootstrap: [AppComponent],
  entryComponents: [ResumeComponent]
})
export class AppModule {}
