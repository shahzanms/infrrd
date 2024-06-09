import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss',
})
export class MainMenuComponent {
  @Output() toggleSubMenu = new EventEmitter<string>();
  @Output() closeSubMenu = new EventEmitter<string>();
  selectedIndex?: number;
  navItems = [
    { icon: 'dns', text: 'Overview' },
    { icon: 'email', text: 'Messages' },
    { icon: 'search', text: 'Search' },
    { icon: 'filter_alt', text: 'Filter' },
    { icon: 'route', text: 'History' },
    { icon: 'person', text: 'My Account' },
  ];

  onItemClick(index: number): void {
    if (index === 3) {
      this.toggleSubMenu.emit();
    } else {
      this.closeSubMenu.emit();
    }
    this.selectedIndex = index;
  }
}
