import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClenteService } from '../../services/clente.service';

@Component({
  selector: 'app-cliente-register',
  imports: [],
  templateUrl: './cliente-register.component.html',
  styleUrl: './cliente-register.component.scss'
})
export class ClienteRegisterComponent {
  clienteForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    telefone: new FormControl('', [Validators.required]),
    cpf: new FormControl(''),
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
