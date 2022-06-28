import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  host: {
    '(document:click)': 'close($event)',
  }
})
export class SearchComponent implements OnInit {
  isActive: boolean = false;
  searchedText: string = '';
  menuExtra = false;

  @Output() eventEmitter = new EventEmitter();

  constructor(private _eref: ElementRef) { }

  ngOnInit(): void {
  }

  clear() {
    this.searchedText = '';
  }

  close(event: any) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.isActive = false;
      this.menuExtra = false;
    }
  }

  inputActive() {
    this.isActive = true;
  }

  searchClick(event: any) {
    this.menuExtra = true;
  }

}
