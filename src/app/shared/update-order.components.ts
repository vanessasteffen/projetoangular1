import {Component, Input, OnInit} from '@angular/core';
import {Pedidos} from "./models/pedidos";
import {MatDialogRef} from '@angular/material/dialog';
import {DatabaseService} from './services/database/database.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.components.html',
  styleUrls: ['./update-order.components.css']
})
export class UpdateOrderComponents implements OnInit {

  @Input() id?: number;

  public updateOrder: Pedidos = {
    name: '',
    size: 0,
    description: '',
    price: 0,
    created_at: '',
    updated_at: ''
  }

  constructor(
    private dialogRef: MatDialogRef<UpdateOrderComponents>,
    private databaseService: DatabaseService
  ) {
  }

  ngOnInit(): void {
    this.showUpdateOrder()
  }

  showUpdateOrder() {
    this.databaseService.get('produto/' + this.id + '/clientes', []).subscribe(res => {
      this.updateOrder = res;
    });
  }

  updateOrderButton() {
    this.databaseService.put('update/produto/' + this.id, this.updateOrder).subscribe(() => {

    })
    alert('Deseja salvar as alterações?')
    return this.cancel()
  }

  cancel(): void {
    this.dialogRef.close()
    window.location.reload()
  }
}
