import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-personal-info-form',
  templateUrl: './user-personal-info-form.component.html',
  styleUrls: ['./user-personal-info-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPersonalInfoFormComponent implements OnInit {

  @Input() form: FormGroup;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  detectChanges() {
    this.cd.detectChanges();
  }

}
