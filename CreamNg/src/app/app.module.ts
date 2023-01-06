import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from "@angular/cdk/drag-drop";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortalLayoutComponent } from './portal/portal-layout/portal-layout.component';
import { HomepageComponent } from './portal/homepage/homepage.component';
import { HeaderComponent } from './portal/components/header/header.component';
import { FooterComponent } from './portal/components/footer/footer.component';
import { MainNavigationComponent } from './portal/components/main-navigation/main-navigation.component';
import { TabsPageComponent } from './portal/pages/tabs-page/tabs-page.component';
import { ModalPageComponent } from './portal/pages/modal-page/modal-page.component';
import { TabsComponent } from './lib/components/tabs/tabs.component';
import { TabPanelComponent } from './lib/components/tabs/tab-panel/tab-panel.component';
import { ModalComponent } from './lib/components/modal/modal.component';
import { ModalTriggerComponent } from './lib/components/modal/modal-trigger/modal-trigger.component';
import { AutofocusDirective } from './lib/directives/autofocus.directive';
import { MessageBlockComponent } from './lib/components/message-block/message-block.component';
import { ToastComponent } from './lib/components/toast/toast.component';
import { SnackbarComponent } from './lib/components/snackbar/snackbar.component';
import { SnackbarPageComponent } from './portal/pages/snackbar-page/snackbar-page.component';
import { ToastPageComponent } from './portal/pages/toast-page/toast-page.component';
import { ChipComponent } from './lib/components/chip/chip.component';
import { DropdownComponent } from './lib/components/dropdown/dropdown.component';
import { DropdownItemComponent } from './lib/components/dropdown/dropdown-item/dropdown-item.component';
import { ChipPageComponent } from './portal/pages/chip-page/chip-page.component';
import { MessagesPageComponent } from './portal/pages/messages-page/messages-page.component';
import { DropdownPageComponent } from './portal/pages/dropdown-page/dropdown-page.component';
import { TooltipDirective } from './lib/directives/tooltip.directive';
import { TooltipPageComponent } from './portal/pages/tooltip-page/tooltip-page.component';
import { IconBtPageComponent } from './portal/pages/icon-bt-page/icon-bt-page.component';
import { IconButtonComponent } from './lib/components/icon-button/icon-button.component';
import { AccordionComponent } from './lib/components/accordion/accordion.component';
import { AccordionItemComponent } from './lib/components/accordion/accordion-item/accordion-item.component';
import { AccordionPageComponent } from './portal/pages/accordion-page/accordion-page.component';
import { HComponent } from './lib/components/h/h.component';
import { CollapsiblePageComponent } from './portal/pages/collapsible-page/collapsible-page.component';
import { CollapsibleComponent } from './lib/components/collapsible/collapsible.component';
import { TextEllipsisComponent } from './lib/components/text-ellipsis/text-ellipsis.component';
import { TextEllipsisPageComponent } from './portal/pages/text-ellipsis-page/text-ellipsis-page.component';
import { ProgressSpinnerPageComponent } from './portal/pages/progress-spinner-page/progress-spinner-page.component';
import { ProgressSpinnerComponent } from './lib/components/progress-spinner/progress-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    PortalLayoutComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    MainNavigationComponent,
    TabsComponent,
    TabPanelComponent,
    TabsPageComponent,
    ModalPageComponent,
    ModalComponent,
    ModalTriggerComponent,
    AutofocusDirective,
    MessageBlockComponent,
    ToastComponent,
    SnackbarComponent,
    SnackbarPageComponent,
    ToastPageComponent,
    ChipComponent,
    DropdownComponent,
    DropdownItemComponent,
    ChipPageComponent,
    MessagesPageComponent,
    DropdownPageComponent,
    TooltipDirective,
    TooltipPageComponent,
    IconBtPageComponent,
    IconButtonComponent,
    AccordionComponent,
    AccordionItemComponent,
    AccordionPageComponent,
    HComponent,
    CollapsiblePageComponent,
    CollapsibleComponent,
    TextEllipsisComponent,
    TextEllipsisPageComponent,
    ProgressSpinnerPageComponent,
    ProgressSpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
