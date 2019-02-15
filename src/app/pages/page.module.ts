import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageRoutes } from './page.routing';
import { HttpClientModule } from '@angular/common/http';
import { JobsPageComponent } from './jobs-page/jobs-page.component';

@NgModule({
  declarations: [
    JobsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PageRoutes),
    HttpClientModule
  ]
})
export class PageModule { }
