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
} from '@angular/material';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { LayoutModule } from '@angular/cdk/layout';

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

  LayoutModule,
  OverlayModule,
  PortalModule,
];

@NgModule({
  declarations: [],
  imports: [...marterial_modules],
  exports: [...marterial_modules],
  providers: [
    {
      provide: MAT_LABEL_GLOBAL_OPTIONS,
      useValue: {
        float: 'always',
      },
    },
  ],
})
export class MaterialModule { }
