import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  apiURL = "http://yousif.mandhom.com/github-jobs-proxy/proxy.php";

  currentJobCounts : number = 0;
  isSidebarVisible: number;
  jobCountChange: Subject<number> = new Subject<number>();

  constructor(private http: HttpClient) {

   }

  setJobCount(count:number) {
      this.jobCountChange.next(count);
  }



  getJobs(searchPram) {

    return this.http.get(this.apiURL, { params: {
      action: "positions.json",
      search: searchPram
    }
  });
  }
}
