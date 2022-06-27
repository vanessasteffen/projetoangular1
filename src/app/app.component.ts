import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {DropdownService} from "./shared/services/dropdown.service";
import {Tamanhos} from "./shared/models/tamanhos";


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
  res: any;
  private form: any;
  sizes: Tamanhos[] | any;
  size: any;

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
  }

  onSubmit(formulario: any) {
    console.log(formulario.value);
    formulario.value.cliente_id = 1;
    //console.log(form.value);
    //console.log(this.produto);

    console.log(formulario.value);
    this.http.post('http://crud-laravel.test/api/register/produto', {
        cliente_id: 1,
        name: formulario.value.name,
        size: formulario.value.size,
        price: formulario.value.price.replace(",","."),
        description: formulario.value.description
      }
    )
      .subscribe((dados: any) => {
          console.log(dados);
          //reseta o formulario
          formulario.form.reset();
        },
        (error: any) => alert('erro'));
    console.log(this.http);
  }

  resetar() {
    this.form.reset();
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



