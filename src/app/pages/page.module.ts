import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageRoutes } from './page.routing';
import { HttpClientModule } from '@angular/common/http';
import { JobsPageComponent } from './jobs-page/jobs-page.component';
import { SidebarComponent } from '../layouts/full/sidebar/sidebar.component';
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { PanelModule } from 'primeng/components/panel/panel';
import { ButtonModule } from 'primeng/components/button/button';
import { RadioButtonModule } from 'primeng/components/radioButton/radioButton';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';

import { FormsModule } from '@angular/forms';
import { JobDetailsPageComponent } from './job-details-page/job-details-page.component';
import { MyFavoriteJobsPageComponent } from './my-favorite-jobs-page/my-favorite-jobs-page.component';
import { dateFormat } from '../shared/pipes/date-format';
import { LoaderComponent } from '../shared/components/loader/loader.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    JobsPageComponent,
    JobDetailsPageComponent,
    SidebarComponent,
    MyFavoriteJobsPageComponent,
    dateFormat,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PageRoutes),
    HttpClientModule,
    FormsModule,
    DropdownModule,
    ProgressSpinnerModule
  ]
})
export class PageModule { }
