import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EnterPageComponent } from './enter-page/enter-page.component';
import { MainComponent } from './main/main.component';
import { Top10Component } from './top10/top10.component';
import { LevelComponent } from './level/level.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';
import {MatCommonModule, MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field'
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule,  } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';


import {Routes, RouterModule} from '@angular/router';
import { AchievementsComponent } from './achievements/achievements.component';
import { ScoreComponent } from './score/score.component';
import { SoonAchievementComponent } from './soon-achievement/soon-achievement.component';
import { AdminComponent } from './admin/admin.component';
import { TableForAdminComponent } from './table-for-admin/table-for-admin.component';

const appRoutes: Routes =[
  { path: '', component: EnterPageComponent},
  { path: 'main', component: MainComponent},
  { path: 'admin', component: AdminComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EnterPageComponent,
    MainComponent,
    Top10Component,
    LevelComponent,
    AchievementsComponent,
    ScoreComponent,
    SoonAchievementComponent,
    AdminComponent,
    TableForAdminComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatListModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
