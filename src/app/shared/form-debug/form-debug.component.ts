import {Component, OnInit, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {UpdateOrderComponents} from "../update-order.components";


@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrls: ['./form-debug.component.css']
})
export class FormDebugComponent implements OnInit {

  @Input() form: any;


  constructor(
    private http: HttpClient,
    public dialog:MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  delete(id: number) {
    this.http.delete('http://crud-laravel.test/api/produto/' + id, {}
    ).subscribe((dados: any) => {
        console.log(dados);
      },
      (success: any) => location.reload());
    console.log(this.http);
  }

  updateOrder(id: number){
    const dialogRef = this.dialog.open(this.UpdateOrderComponents, {
      minWidth: '400px'
    })
    dialogRef.componentInstance.id = id;
    dialogRef.afterClosed().subscribe()
  }

  // update(pedido: any) {
  //   window.open(window.location.href+"/update", '_blank');
  /*

      console.log(pedido.cliente_id);

      this.http.put('http://crud-laravel.test/api/update/produto/' + pedido.id, {

          cliente_id: pedido.cliente_id,
          description: pedido.description,
          id: pedido.id,
          name: pedido.name,
          price: pedido.price,
          size: pedido.size
        }
      ).subscribe((dados: any) => {
          console.log(dados);
        },
        (success: any) => 'deu certo')//location.reload());
      console.log(this.http);*/
//   }
// }
}
