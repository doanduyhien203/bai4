import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {} from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ProductComponent } from './product/product.component';
import { TabBsGroupComponent } from './tabs/tab-bs-group.component';
import { TabGroupComponent } from './tabs/tab-group.component';
import { TabPanelComponent } from './tabs/tab-panel.component';
import { TabContentDirective } from './tabs/tab-content.directive';
import { FormatAddressPipe } from './format-address.pipe';
import { AdultPipe } from './adult.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    TabGroupComponent,
    TabPanelComponent,
    TabBsGroupComponent,
    CounterComponent,
    TabContentDirective,
    FormatAddressPipe,
    AdultPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
