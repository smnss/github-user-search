import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { GitUserSearchService } from './services/git-user-search.service';
import { Observable } from 'rxjs';
import { PaginaterService } from './services/paginater.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public userDetail: any[] = [];
  value = 'smnss';
  pager: any = {};
  pageSize = 2;
  pageRecords: any[];

  constructor(private gitUserSearchService: GitUserSearchService, private paginaterService: PaginaterService) {
  }



  ngOnInit() {


  }

  searchUser() {
    this.gitUserSearchService.getGitHubUser(this.value).subscribe(res => {
      this.userDetail = res;
      console.log(this.userDetail);
      this.setPage(1);
    })
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.paginaterService.getPager(this.userDetail.length, page, this.pageSize);

    // get current page of items
    this.pageRecords = this.userDetail.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}


export interface Section {
  name: string;
  updated: Date;
}

export interface allUserModal {
  total_count: number;
  incomplete_results: boolean;
  items: any[];
}

