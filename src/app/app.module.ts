import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeComponent } from './employee/employee.component';
import { MatCardModule } from '@angular/material/card';
import { EmployeesComponent } from './employees/employees.component';
import { MatDividerModule } from '@angular/material/divider';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FilterComponent } from './filter/filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CapitalizeWordsPipe } from './pipes/capitalize.pipe';
import { StoreModule } from '@ngrx/store';
import { EmployeeEffects } from './store/effects/employee.effect';
import { employeeReducer } from './store/reducer/employee.reducer';
import { EffectsModule } from '@ngrx/effects';
@NgModule({
  declarations: [
    AppComponent,
    CapitalizeWordsPipe,
    EmployeeComponent,
    EmployeesComponent,
    MainMenuComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ employees: employeeReducer }),
    EffectsModule.forRoot([EmployeeEffects]),
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatListModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
