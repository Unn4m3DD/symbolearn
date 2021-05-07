import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { InitialComponent } from './initial/initial.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { SettingsComponent } from './settings/settings.component';
import { LearnMorseComponent } from './learn-morse/learn-morse.component';
import { FormsModule } from "@angular/forms"
@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    BottomNavComponent,
    InitialComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ExercisesComponent,
    SettingsComponent,
    LearnMorseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
