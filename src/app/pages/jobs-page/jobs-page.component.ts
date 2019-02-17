import { JobService } from './../../shared/services/job.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
  styleUrls: ['./jobs-page.component.scss']
})
export class JobsPageComponent implements OnInit {
  searchPram = "node";
  
  getJob_Observable;
  jobList;
  loading : boolean = true;
  constructor(private _jobService : JobService) { }

  ngOnInit() {
    this.renderJobs();
  }

  renderJobs() {
    this.loading = true;
    this.getJob_Observable = this._jobService.getJobs(this.searchPram).subscribe(res => {
      this.jobList = res;
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    if (this.getJob_Observable) {  
      this.getJob_Observable.unsubscribe();
    }
  }

}
