import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {FormDebugComponent} from "./shared/form-debug/form-debug.component";

const routes: Routes = [
  // {path: '', component : AppComponent},
   {path: 'pedidos', component : FormDebugComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
