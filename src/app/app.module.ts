import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LeftPanelComponent } from './user-platform/left-panel/left-panel.component';
import { CategoryInformationComponent } from './user-platform/category-information/category-information.component';
import { CategoryInformationReportsComponent } from './user-platform/category-information-reports/category-information-reports.component';
import { RootUserPlatformComponent } from './user-platform/root-user-platform/root-user-platform.component';
import { ContentDefaultComponent } from './user-platform/content-default/content-default.component';
import { ContentTopBarComponent } from './user-platform/content-top-bar/content-top-bar.component';
import { ContentTopBarCategoryNameComponent } from './user-platform/content-top-bar-category-name/content-top-bar-category-name.component';
import { ContentInformationReportsComponent } from './user-platform/content-information-reports/content-information-reports.component';
import { ContentCategoryDefaultComponent } from './user-platform/content-category-default/content-category-default.component';
import { ContentCategoryReportsCatAComponent } from './user-platform/content-category-reports-cat-a/content-category-reports-cat-a.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LeftPanelComponent,
    CategoryInformationComponent,
    CategoryInformationReportsComponent,
    RootUserPlatformComponent,
    ContentDefaultComponent,
    ContentTopBarComponent,
    ContentTopBarCategoryNameComponent,
    ContentInformationReportsComponent,
    ContentCategoryDefaultComponent,
    ContentCategoryReportsCatAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
