import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  apiURL = "http://yousif.mandhom.com/github-jobs-proxy/proxy.php";
  constructor(private http: HttpClient) { }

  getJobs(searchPram) {

    return this.http.get(this.apiURL, { params: {
      action: "positions.json",
      search: searchPram
    }
  });
  }
}
