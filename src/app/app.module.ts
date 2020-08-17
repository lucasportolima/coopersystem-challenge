import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  FooterComponent,
  HeaderComponent,
  StandardViewComponent
} from './_components/shared/uikit';

import { PagesModule } from './_pages/pages.module';
import { DarkenOnHoverModule } from './_directives/darken-on-hover/darken-on-hover.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    StandardViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    DarkenOnHoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
