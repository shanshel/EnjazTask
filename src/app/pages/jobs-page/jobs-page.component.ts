import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
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
  constructor(
    private _jobService : JobService, 
    private _activeRoute : ActivatedRoute,
    private _router : Router
    ) { }

  ngOnInit() {
     if (this._activeRoute.snapshot.queryParams.search) {
      this.searchPram = this._activeRoute.snapshot.queryParams.search
     }

    this.renderJobs();

    this._router.events.subscribe((val) => {
     
      if (val instanceof NavigationEnd){
        this.searchPram = this._activeRoute.snapshot.queryParams.search;
        this.renderJobs();
      }
   

      

    });

    /*
    this._activeRoute.queryParams.subscribe(queryParams => {
      
    });
    */
  
  }

  renderJobs() {
    this.loading = true;
    this.getJob_Observable = this._jobService.getJobs(this.searchPram).subscribe(res => {
      this.jobList = res;
      console.log(this.jobList.length);
      this._jobService.setJobCount(this.jobList.length);
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    if (this.getJob_Observable) {  
      this.getJob_Observable.unsubscribe();
    }
  }

}
