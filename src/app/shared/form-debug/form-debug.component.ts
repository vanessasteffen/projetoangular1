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
//form para mostrar os dados que serão alterados nas tabelas

  constructor(
    private http: HttpClient,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
  }

  //deleta o item selecionado da tabela até ao servidor
  delete(id: number) {
    alert('Deseja excluir o produto?')
    this.http.delete('http://crud-laravel.test/api/produto/' + id, {}
    ).subscribe((dados: any) => {

        console.log(dados);
      },
      (success: any) => location.reload());
    console.log(this.http);
  }

  //faz a atualização de algum dado da tabela produto, caso haja erros
  updateOrder(id: number) {
    const dialogRef = this.dialog.open(UpdateOrderComponents, {
      minWidth: '400px'
    })
    dialogRef.componentInstance.id = id;
    dialogRef.afterClosed().subscribe()
  }
}
