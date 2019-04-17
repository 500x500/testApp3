import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AppService} from '../services/app.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
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
          name: ['',
            Validators.required,
            Validators.pattern(/[А-я]/)
          ]
        }),
        this.formBuilder.group({
          dob: ['', Validators.required],
        }),
        this.formBuilder.group({
          sex: ['', Validators.required],
        }),
        this.formBuilder.group({
          snils: ['', Validators.required,
          validateSnils],
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

function validateSnils(snils, error) {
  let result = false;
  if (typeof snils === 'number') {
    snils = snils.toString();
  } else if (typeof snils !== 'string') {
    snils = '';
  }
  if (!snils.length) {
    error.code = 1;
    error.message = 'СНИЛС пуст';
  } else if (/[^0-9]/.test(snils)) {
    error.code = 2;
    error.message = 'СНИЛС может состоять только из цифр';
  } else if (snils.length !== 11) {
    error.code = 3;
    error.message = 'СНИЛС может состоять только из 11 цифр';
  } else {
    let sum = 0;
    for (var i = 0; i < 9; i++) {
      sum += parseInt(snils[i]) * (9 - i);
    }
    let checkDigit = 0;
    if (sum < 100) {
      checkDigit = sum;
    } else if (sum > 101) {
      checkDigit = parseInt(sum % 101);
      if (checkDigit === 100) {
        checkDigit = 0;
      }
    }
    if (checkDigit === parseInt(snils.slice(-2))) {
      result = true;
    } else {
      error.code = 4;
      error.message = 'Неправильное контрольное число';
    }
  }
  return result;
}
