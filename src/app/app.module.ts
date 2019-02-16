import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullComponent } from './layouts/full/full.component';
import { NavComponent } from './layouts/full/nav/nav.component';
import { HeaderComponent } from './layouts/full/header/header.component';
import { FooterComponent } from './layouts/full/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
