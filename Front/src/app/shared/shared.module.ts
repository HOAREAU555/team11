import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
// import { TestComponent } from '../test/test.component';

import {MatDatepickerModule,} from '@angular/material/datepicker'; 
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule}from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    MatDatepickerModule,
    CommonModule,
    IonicModule,
    RouterModule,
    MatDatepickerModule,
     MatNativeDateModule,
     MatFormFieldModule,
     MatInputModule,
     MatIconModule,
     MatAutocompleteModule,
     FormsModule,ReactiveFormsModule,
     
  ]
  ,exports:[MatDatepickerModule,MatFormFieldModule,MatInputModule,MatIconModule,MatAutocompleteModule,FormsModule,ReactiveFormsModule  ]
  ,
  providers:[MatDatepickerModule]
})
export class SharedModule { }
