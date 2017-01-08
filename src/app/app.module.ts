import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';

import { CatalogComponent } from './catalog/catalog.component';
import { MainPageComponent } from './main-page/main-page.component'


@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component: MainPageComponent},
      {path: 'catalog', component: CatalogComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }

platformBrowserDynamic()
