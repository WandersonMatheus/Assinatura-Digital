import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClenteService } from '../../services/clente.service';
import { PrimaryinputComponent } from "../../components/primaryinput/primaryinput.component";
import { ClientinputComponent } from '../../components/clientinput/clientinput.component';


@Component({
  selector: 'app-cliente-register',
  imports: [ReactiveFormsModule],
  templateUrl: './cliente-register.component.html',
  styleUrl: './cliente-register.component.scss'
})
export class ClienteRegisterComponent {
  
  clienteForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.email]),
    telefone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{10,11}$/) // Aceita telefones com ou sem 9º dígito
    ]),
    cpf: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{11}$/) // Apenas números
    ]),
    observacoes: new FormControl('')
  });

  constructor(
    private clienteService: ClenteService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  submit() {
    if (this.clienteForm.invalid) {
      this.toastr.warning('Preencha os campos obrigatórios.');
      return;
    }

    this.clienteService.cadastrar(this.clienteForm.value).subscribe({
      next: () => {
        this.toastr.success('Cliente cadastrado com sucesso!');
        this.router.navigate(['/home']);
      },
      error: () => {
        this.toastr.error('Erro ao cadastrar cliente.');
      }
    });
  }
}
