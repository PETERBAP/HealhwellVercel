import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { Nopagefound2Component } from './nopagefound2/nopagefound2.component';
import { Nopagefound3Component } from './nopagefound3/nopagefound3.component';
import { Nopagesfound3Component } from './nopagesfound3/nopagesfound3.component';
import { Nopagesfound4Component } from './nopagesfound4/nopagesfound4.component';
import { Nopagesfound5Component } from './nopagesfound5/nopagesfound5.component';







@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    Nopagefound2Component,
    Nopagefound3Component,
    Nopagesfound3Component,
    Nopagesfound4Component,
    Nopagesfound5Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
