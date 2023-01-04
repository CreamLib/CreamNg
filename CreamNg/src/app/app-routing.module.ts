import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalLayoutComponent } from './portal/portal-layout/portal-layout.component';
import { HomepageComponent } from './portal/homepage/homepage.component';
import { TabsPageComponent } from './portal/pages/tabs-page/tabs-page.component';
import { ModalPageComponent } from './portal/pages/modal-page/modal-page.component';
import { ToastPageComponent } from './portal/pages/toast-page/toast-page.component';
import { SnackbarPageComponent } from './portal/pages/snackbar-page/snackbar-page.component';
import { ChipPageComponent } from './portal/pages/chip-page/chip-page.component';
import { MessagesPageComponent } from './portal/pages/messages-page/messages-page.component';
import { DropdownPageComponent } from './portal/pages/dropdown-page/dropdown-page.component';
import { TooltipPageComponent } from './portal/pages/tooltip-page/tooltip-page.component';
import { IconBtPageComponent } from './portal/pages/icon-bt-page/icon-bt-page.component';
import { AccordionPageComponent } from './portal/pages/accordion-page/accordion-page.component';
import { CollapsiblePageComponent } from './portal/pages/collapsible-page/collapsible-page.component';

const routes: Routes = [
  //Portal (doc) routes goes here
  {
    path: "portal",
    component: PortalLayoutComponent,
    children: [
      { path: "tabs", component: TabsPageComponent, data: {title: "Tabs Component"} },
      { path: "modal", component: ModalPageComponent, data: {title: "Modal Component"} },
      { path: "toast", component: ToastPageComponent, data: {title: "Toast Component"} },
      { path: "snackbar", component: SnackbarPageComponent, data: {title: "Snackbar Component"} },
      { path: "chip", component: ChipPageComponent, data: {title: "Chip Component"} },
      { path: "messages", component: MessagesPageComponent, data: {title: "Message Block Component"} },
      { path: "dropdown", component: DropdownPageComponent, data: {title: "Dropdown Component"} },
      { path: "tooltip", component: TooltipPageComponent, data: {title: "Tooltip Directive"} },
      { path: "icon-button", component: IconBtPageComponent, data: {title: "Icon Button Component"} },
      { path: "accordion", component: AccordionPageComponent, data: {title: "Accordion Component"} },
      { path: "collapsible", component: CollapsiblePageComponent, data: {title: "Collapsible Component"} }
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
