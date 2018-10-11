import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-company-info-form',
  templateUrl: './company-info-form.component.html',
  styleUrls: ['./company-info-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyInfoFormComponent implements  OnInit {

  @Input() form: FormGroup;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  detectChanges() {
    this.cd.detectChanges();
  }

}
