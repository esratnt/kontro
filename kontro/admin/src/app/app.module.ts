import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketComponent } from './market/market.component';
import { AkaryakitComponent } from './akaryakit/akaryakit.component';
import { OdemelerComponent } from './odemeler/odemeler.component';
import { PersonelComponent } from './personel/personel.component';
import { RaporlarComponent } from './raporlar/raporlar.component';
import { YapilanOdemelerComponent } from './odemeler/yapilan-odemeler/yapilan-odemeler.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketComponent,
    AkaryakitComponent,
    OdemelerComponent,
    PersonelComponent,
    RaporlarComponent,
    YapilanOdemelerComponent,
    SidebarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
