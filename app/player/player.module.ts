import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdInputModule, MdFormFieldModule, MdButtonModule, MdCardModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    MdInputModule,
    MdFormFieldModule,
    MdButtonModule,
    MdCardModule
  ],
  providers: [],
  exports: [CommonModule,
    FormsModule, MdButtonModule]
})

export class PlayerModule {

 }
