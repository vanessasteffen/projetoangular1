import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {DropdownService} from "./shared/services/dropdown.service";
import {Tamanhos} from "./shared/models/tamanhos";
import {Name} from "./shared/models/name";
import {Clientes} from "./shared/models/clientes";
import {Pedidos} from "./shared/models/pedidos";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  produto: any = {
    name: null,
    size: null,
    description: null,
    price: null,
  }

  cliente: any = {
    id: null,
    name: null,
  }

  id_client: any;
  res: any;
  private form: any;
  sizes: Tamanhos[] | any;
  clientes: Clientes[] | any;
  pedidos: Pedidos[] | any;
  results: Clientes[] | any;

  public formulario: FormGroup | any;

  constructor(
    private http: HttpClient,
    private dropdownservices: DropdownService,
    public formBuilder: FormBuilder) {

    this.formulario = this.formBuilder.group({
      'cliente_id': new FormControl(),
      'name': new FormControl('', [Validators.required]),
      'size': new FormControl('', [Validators.required]),
      'description': new FormControl('', [Validators.required]),
      'price': new FormControl('', [Validators.required]),

    });
  }

  resetForm(): void {
    this.formulario.reset();
  }

  ngOnInit() {
    this.dropdownservices.getTamanhos()
      .subscribe(tamanho => {
        this.sizes = tamanho;
        console.log(tamanho);
      });

    this.getClientes();
    this.getProdutos();
  }

  getProdutos() {
    this.http.get<any>("http://crud-laravel.test/api/produto").subscribe(response => {
      console.log(response);
      this.pedidos = response;
    });
  }

  getClientes() {
    this.http.get<any>("http://crud-laravel.test/api/clientes").subscribe(response => {
      console.log(response);
      this.clientes = response;
    });
  }

  onSubmit(formulario: any) {
    console.log(formulario.value);
    //console.log(form.value);
    //console.log(this.produto);

    this.http.post('http://crud-laravel.test/api/register/produto', {
        cliente_id: formulario.value.cliente,
        name: formulario.value.name,
        size: formulario.value.size,
        price: formulario.value.price.replace(",", "."),
        description: formulario.value.description
      }
    )
      .subscribe((dados: any) => {
          console.log(dados);
          //reseta o formulario
          formulario.form.reset();
          location.reload();
        },
        (error: any) => alert('erro'));
    console.log(this.http);
  }


  verificaValidTouched(campo: any) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo: any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }
}



