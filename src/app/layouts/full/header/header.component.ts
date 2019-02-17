import { JobService } from './../../../shared/services/job.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  search : string = "node";
  jobCount : string = "0";
  constructor(
    private _router : Router, 
    private _activeRoute : ActivatedRoute,
    private _jobService : JobService
    ) {
      
    }

  ngOnInit() {
    
    this._jobService.jobCountChange.subscribe((value) => {
      this.jobCount = (value >= 50) ? value.toString() + "+"  : value.toString();
    });

    if (this._activeRoute.snapshot.queryParams.search) {
      this.search = this._activeRoute.snapshot.queryParams.search
    }
  }

  searching() {
   
    this._router.navigate(
      [], 
      {
        relativeTo: this._activeRoute,
        queryParams: { search: this.search },
        queryParamsHandling: "merge",
      });
  }

}
