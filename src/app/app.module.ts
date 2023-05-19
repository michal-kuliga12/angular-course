import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SetBackgroundDirective } from './CustomDirective/setBackground.directive';
import { HighlightDirective } from './CustomDirective/highlight.directive';
import { HoverDirective } from './CustomDirective/hover.directive';
import { BetterHighlightDirective } from './CustomDirective/better-highlight.directive';
import { ClassDirective } from './customDirective/class.directive';
import { StyleDirective } from './customdirective/style.directive';
import { IfDirective } from './customdirective/if.directive';

@NgModule({
  declarations: [AppComponent, SetBackgroundDirective, HighlightDirective, HoverDirective, BetterHighlightDirective, ClassDirective, StyleDirective, IfDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
