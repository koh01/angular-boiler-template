import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TestComponent } from './test/test.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children:[
      { path:'test', component: TestComponent },
      { path:'add', component: AddComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }