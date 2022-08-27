import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MainComponent } from '../main/main.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [MainComponent],
  bootstrap: [MainComponent],
})
export class AppModule {}
