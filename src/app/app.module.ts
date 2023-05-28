import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PercentagePipe } from './percentage.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [AppComponent, PercentagePipe, FilterPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
