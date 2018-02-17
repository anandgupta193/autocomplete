import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutesModule } from './routes/routes.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { AutocompleteService } from './shared/services/autocomplete.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }, AutocompleteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
