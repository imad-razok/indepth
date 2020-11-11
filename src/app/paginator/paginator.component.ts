import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() NbOfpages: number;
  @Output() pageNumberEvent = new EventEmitter<number>();
  pages: number[];
  constructor() { }

  ngOnInit(): void {
    this.pages = new Array(this.NbOfpages);
  }
  pageNumberClicked(pageNumber: number) {
    this.pageNumberEvent.emit(pageNumber);
  }

}
