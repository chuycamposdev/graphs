import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mainMenu: Array<any> = [];

  ngOnInit(): void {
    this.mainMenu = [
      {
        name: 'Dashboard',
        icon: 'home',
        router: ['/', 'dashboard']
      },
      {
        name: 'Portafolio',
        icon: 'work',
        router: ['/', 'portafolio']
      },
      {
        name: 'acciones',
        icon: 'list',
        router: ['', 'acciones']
      }
    ]
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
