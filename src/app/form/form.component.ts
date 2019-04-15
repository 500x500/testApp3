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
  constructor(private formBuilder: FormBuilder, private dataSource: AppService) {}


  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      formArray: this.formBuilder.array([
        this.formBuilder.group({
          name: ['', Validators.required],
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

  Sex: sex[] = [
    {value: 'Женский', viewValue: 'Женский'},
    {value: 'Мужской', viewValue: 'Мужской'},
  ];

addArray() {
    console.log(this.formGroup.value);
    this.dataSource.formArray.push(AppService);
  }
}


