import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginaterService {

  constructor() { }

  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {

    let totalPages = Math.ceil(totalItems / pageSize);
    let startPage: number, endPage: number;
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex
    };
}
}
