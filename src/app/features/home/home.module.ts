import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './containers/home/home.component';
import { UserPersonalInfoFormComponent } from './components/user-personal-info-form/user-personal-info-form.component';
import { CompanyInfoFormComponent } from './components/company-info-form/company-info-form.component';

import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from '@progress/kendo-angular-dialog';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    ButtonsModule,
    DialogModule
  ],
  declarations: [HomeComponent, UserPersonalInfoFormComponent, CompanyInfoFormComponent]
})
export class HomeModule { }
