import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
    MessageBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
