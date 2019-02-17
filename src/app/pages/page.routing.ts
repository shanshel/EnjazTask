import { JobDetailsPageComponent } from './job-details-page/job-details-page.component';
import { JobsPageComponent } from './jobs-page/jobs-page.component';
import { Routes } from '@angular/router';



export const PageRoutes: Routes = [
  {
    path: 'jobs',
    component: JobsPageComponent
  },
  {
    path: 'job/:id',
    component: JobDetailsPageComponent
  }
];
