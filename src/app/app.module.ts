import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { FormDebugComponent } from './shared/form-debug/form-debug.component';
import { CampoControlErroComponent } from './shared/campo-control-erro/campo-control-erro.component';
import {DropdownService} from "./shared/services/dropdown.service";
import { ProductModalComponent } from './product-modal/product-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormDialogComponent } from './product-modal/form-dialog/form-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    FormDebugComponent,
    CampoControlErroComponent,
    ProductModalComponent,
    FormDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [DropdownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
