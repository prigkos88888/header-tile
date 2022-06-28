import {AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(document:click)': 'close($event)',
  }
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'tile-expert';
  mobileOpen: boolean = false;

  @ViewChild('logo') logo: any = ElementRef;
  @ViewChild('header') header: any = ElementRef;
  @ViewChild('menu') menu: any = ElementRef;
  @ViewChild('centerBlock') centerBlock: any = ElementRef;

  constructor(private renderer: Renderer2, private _eref: ElementRef) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.positionFilters();
  }

  ngOnInit(): void {
    //this.positionFilters();
  }

  ngAfterViewInit() {
    if (window.innerWidth <= 1000) {
      this.renderer.appendChild(this.centerBlock.nativeElement, this.logo.nativeElement);
      this.renderer.appendChild(this.header.nativeElement, this.menu.nativeElement);
    }
  }

  close(event: any) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.mobileOpen = false;
    }
  }

  positionFilters() {
    if (window.innerWidth <= 1000) {
      this.renderer.appendChild(this.centerBlock.nativeElement, this.logo.nativeElement);
      this.renderer.appendChild(this.header.nativeElement, this.menu.nativeElement);
    } else {
      this.renderer.appendChild(this.centerBlock.nativeElement, this.menu.nativeElement);
      this.renderer.appendChild(this.header.nativeElement, this.logo.nativeElement);
    }
  }
}
