import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalLayoutComponent } from './portal/portal-layout/portal-layout.component';
import { HomepageComponent } from './portal/homepage/homepage.component';
import { TabsPageComponent } from './portal/pages/tabs-page/tabs-page.component';
import { ModalPageComponent } from './portal/pages/modal-page/modal-page.component';

const routes: Routes = [
  //Portal (doc) routes goes here
  {
    path: "portal",
    component: PortalLayoutComponent,
    children: [
      { path: "tabs", component: TabsPageComponent, data: {title: "Tabs Component"} },
      { path: "modal", component: ModalPageComponent, data: {title: "Modal Component"} }
    ]
  },
  { path: "home", component: HomepageComponent, data: {title: "CreamNg"} },
  // otherwise redirect to home
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
