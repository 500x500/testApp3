import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormComponent} from './form/form.component';
import {TableComponent} from './table/table.component';
import {AppService} from './services/app.service';
import {MatStepperModule, MatCardModule, MatTableModule, MatButtonModule, MatInputModule, MatCheckboxModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
