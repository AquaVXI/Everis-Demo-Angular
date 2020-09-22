import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContentCategoryDefaultComponent } from './user-platform/content-category-default/content-category-default.component';
import { ContentCategoryReportsCatAComponent } from './user-platform/content-category-reports-cat-a/content-category-reports-cat-a.component';
import { ContentDefaultComponent } from './user-platform/content-default/content-default.component';
import { ContentInformationReportsComponent } from './user-platform/content-information-reports/content-information-reports.component';
import { ContentTopBarCategoryNameComponent } from './user-platform/content-top-bar-category-name/content-top-bar-category-name.component';
import { RootUserPlatformComponent } from './user-platform/root-user-platform/root-user-platform.component';

const routes: Routes = [

  {path: ""             , component: LoginComponent},
  {path: "user-platform", component: RootUserPlatformComponent, children:[
    {path: "", component: ContentDefaultComponent},
    {path: "content-category-information-reports", component: ContentInformationReportsComponent, children:[
      {path: "", component: ContentCategoryDefaultComponent},
      {path: "content-category-1", component: ContentCategoryReportsCatAComponent}
    ]}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
