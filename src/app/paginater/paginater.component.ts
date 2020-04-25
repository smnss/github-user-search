import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-paginater',
  templateUrl: './paginater.component.html',
  styleUrls: ['./paginater.component.scss']
})
export class PaginaterComponent  {

  constructor() { }

  // array of all items to be paged
 //private records: any[];
  @Input() pager;
  @Output() gotoPage: EventEmitter<any> = new EventEmitter<any>();

  setPage(pageNumber) {
    this.gotoPage.emit(pageNumber);
  }

}
