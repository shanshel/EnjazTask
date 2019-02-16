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
@NgModule({
  declarations: [
    JobsPageComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PageRoutes),
    HttpClientModule,
    FormsModule,
    DropdownModule
  ]
})
export class PageModule { }
