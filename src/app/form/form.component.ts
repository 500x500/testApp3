import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})

export class FormComponent {
  formGroup = this.fb.group({
    name: [''],
    dob: [''],
  users: this.fb.array([this.fb.control('')])
});

constructor(private fb: FormBuilder) {}

get users() {
  return this.formGroup.get('users') as FormArray;
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.formGroup.value);
  }
}


