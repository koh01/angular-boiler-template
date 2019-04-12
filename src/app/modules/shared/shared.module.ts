import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsampleComponent } from './formsample/formsample.component';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    FormsampleComponent,
    DialogOverviewComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsampleComponent,
    DialogOverviewComponent
  ],
  entryComponents: [
    DialogOverviewComponent,
  ],
})
export class SharedModule { }
