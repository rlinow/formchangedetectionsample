import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserPersonalInfoFormComponent } from '../../components/user-personal-info-form/user-personal-info-form.component';
import { CompanyInfoFormComponent } from '../../components/company-info-form/company-info-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  mainForm: FormGroup;
  resultDialogMessage: string;
  @ViewChild('userInfoForm', {read: UserPersonalInfoFormComponent}) userInfoForm: UserPersonalInfoFormComponent;
  @ViewChild('companyInfoForm', {read: CompanyInfoFormComponent}) companyInfoForm: CompanyInfoFormComponent;
  constructor(private fb: FormBuilder) {
    this.createMainFormGroup();
  }

  ngOnInit() {
  }

  save() {
    Object.values((<FormGroup>this.mainForm.controls['userInfo']).controls).forEach(x => x.markAsTouched());
    Object.values((<FormGroup>this.mainForm.controls['companyInfo']).controls).forEach(x => x.markAsTouched());

    // this is needed to tell the child component to detech changes after form control touched status is updated.
    this.userInfoForm.detectChanges();
    this.companyInfoForm.detectChanges();

    if (this.mainForm.valid) {
      this.resultDialogMessage = `You saved: ${ JSON.stringify(this.mainForm.value) }`;
    }
  }
  private createMainFormGroup(): any {
    this.mainForm = this.fb.group({
      userInfo: this.fb.group({
        username: ['', Validators.required],
        firstName: [''],
        lastName: ['']
      }),
      companyInfo: this.fb.group({
        name: ['', Validators.required],
        city: [''],
        state: ['']
      })
    });
  }

}
