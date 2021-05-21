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
import { FormsModule } from "@angular/forms";
import { AddLanguageComponent } from './add-language/add-language.component';
import { AddLanguageFinalComponent } from './add-language-final/add-language-final.component'
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SmallCardComponent } from './small-card/small-card.component';
import { ChartComponent } from './chart/chart.component';
import { ChartCardComponent } from './chart-card/chart-card.component';
import { ExercisesCardComponent } from './exercises-card/exercises-card.component';
import { ConfigComponent } from './config/config.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    LearnMorseComponent,
    AddLanguageComponent,
    AddLanguageFinalComponent,
    SmallCardComponent,
    ChartComponent,
    ChartCardComponent,
    ExercisesCardComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
