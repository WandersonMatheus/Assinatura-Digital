import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClenteService } from '../../services/clente.service';

@Component({
  selector: 'app-cliente-register',
  imports: [ReactiveFormsModule],
  templateUrl: './cliente-register.component.html',
  styleUrls: ['./cliente-register.component.scss']  // CORRIGIDO: styleUrls (plural)
})
export class ClienteRegisterComponent {
  
  clienteForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.email]),
    telefone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{10,11}$/)
    ]),
    cpf: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{11}$/)
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

    // Se ClenteService.cadastrar espera um tipo específico, faça um cast:
    const cliente = this.clienteForm.value as any; // ou use sua interface Cliente aqui

    this.clienteService.cadastrar(cliente).subscribe({
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
