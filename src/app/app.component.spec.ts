import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { EmployeeFacade } from './store/facade/employee.facade';
import { MockEmployeeFacade } from './store/facade/employee.facade.mock';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FilterComponent } from './filter/filter.component';
import { Component } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async () => {
    @Component({
      selector: 'app-main-menu',
      template: '<p>Mock  Component</p>',
    })
    class MockMainMenuComponent {}

    @Component({
      selector: 'app-filter',
      template: '<p>MockComponent</p>',
    })
    class MockfilterComponent {}

    @Component({
      selector: 'app-employees',
      template: '<p>Mock  Component</p>',
    })
    class MockemployeeComponent {}

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        MatBadgeModule,
        MatButtonModule,
        BrowserAnimationsModule,
      ],
      providers: [
        {
          provide: EmployeeFacade,
          useClass: MockEmployeeFacade,
        },
      ],
      declarations: [
        AppComponent,
        MockemployeeComponent,
        MockfilterComponent,
        MockMainMenuComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
