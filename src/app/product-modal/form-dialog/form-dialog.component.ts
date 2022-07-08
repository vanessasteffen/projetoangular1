import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {ProductModalComponent} from "../product-modal.component";

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css']
})
export class FormDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  cancel(): void{
    this.dialogRef.close();
  }

}
