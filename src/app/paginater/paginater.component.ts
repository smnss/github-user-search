import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginater',
  templateUrl: './paginater.component.html',
  styleUrls: ['./paginater.component.scss']
})
export class PaginaterComponent {

  constructor() { }

  @Input() pager;
  @Output() gotoPage: EventEmitter<any> = new EventEmitter<any>();

  setPage(pageNumber) {
    this.gotoPage.emit(pageNumber);
  }

}
