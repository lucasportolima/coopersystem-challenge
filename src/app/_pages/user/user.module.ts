import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    CommonModule
  ]
})

export class UserModule { }
