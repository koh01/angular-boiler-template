import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NavigationComponent } from './navigation/navigation.component';
import { TestComponent } from './test/test.component';
import { MaterialModule } from 'src/app/material/material.module';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    MainComponent,
    NavigationComponent,
    TestComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    MainRoutingModule
  ]
})
export class MainModule { }
