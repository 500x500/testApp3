import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AppService} from '../services/app.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  isLinear = true;
  formGroup: FormGroup;
  today = new Date().toJSON().split('T')[0];

  constructor(private formBuilder: FormBuilder, private dataSource: AppService) {
  }

  sexs: Sex[] = [
    {value: 'Женский', viewValue: 'Женский'},
    {value: 'Мужской', viewValue: 'Мужской'},
  ];

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      formArray: this.formBuilder.array([
        this.formBuilder.group({
          name: ['', [
            Validators.required,
            Validators.pattern(/[А-я]/)
          ]]
        }),
        this.formBuilder.group({
          dob: ['', Validators.required],
        }),
        this.formBuilder.group({
          sex: ['', Validators.required],
        }),
        this.formBuilder.group({
          snils: ['', Validators.required],
        }),
      ])
    });
  }

  addArray() {
    console.log(this.formGroup.value);
    this.dataSource.addRow(this.formGroup.value.formArray);
  }
}
export interface Sex {
  value: string;
  viewValue: string;
}
