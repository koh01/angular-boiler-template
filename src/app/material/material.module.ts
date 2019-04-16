import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MAT_LABEL_GLOBAL_OPTIONS,
  MatFormFieldModule,
  MatDialogModule,
  MatInputModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatRadioModule,
  MatSelectModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
  DateAdapter,
} from '@angular/material';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { LayoutModule } from '@angular/cdk/layout';
import { JpDateAdapter } from './class/JpDateAdapter';

// 利用するモジュールを追加する
export const marterial_modules = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatSelectModule,
  MatRadioModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,

  LayoutModule,
  OverlayModule,
  PortalModule,
];

@NgModule({
  declarations: [],
  imports: [...marterial_modules],
  exports: [...marterial_modules],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ja-JP'},
    {provide: DateAdapter, useClass: JpDateAdapter},
    {
      provide: MAT_LABEL_GLOBAL_OPTIONS,
      useValue: {
        float: 'always',
      },
    },
  ],
})
export class MaterialModule { }
