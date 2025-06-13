import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from "../../templates/header/header.component";
import { FooterComponent } from "../../templates/footer/footer.component";
import { Cliente } from '../../models/Cliente.model';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';
import { Termo } from '../../models/Termo.model';

@Component({
  selector: 'app-ass-create',
  imports: [ReactiveFormsModule, HeaderComponent, FooterComponent,CommonModule],
  templateUrl: './ass-create.component.html',
  styleUrls: ['./ass-create.component.scss']  // <- corrigido
})
export class AssCreateComponent {
  form: FormGroup;
  clientes: Cliente[] = [];
  termos: any[] = [];
  cenarios: any[] = [];
  linkGerado: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient,private router: Router) {
    this.form = this.fb.group({
      clienteId: [''],
      termoId: [''],
      cenarioId: ['']
    });
  }

  ngOnInit(): void {
    this.http.get<Cliente[]>('http://localhost:8080/clientes').subscribe(res => this.clientes = res);
    this.http.get<Termo[]>('http://localhost:8080/termos/lista').subscribe(res=> this.termos = res);
    this.http.get('/api/cenarios').subscribe((res: any) => this.cenarios = res);
  }

  gerarLink() {
    const payload = this.form.value;
    this.http.post('/api/assinaturas/criar', payload).subscribe((res: any) => {
      this.linkGerado = res.linkAssinatura;
    });
  }

  copiarLink() {
    if (this.linkGerado) {
      navigator.clipboard.writeText(this.linkGerado);
      alert('Link copiado para a área de transferência!');
    }
  }
  criarCliente() {
    this.router.navigate(["Assinaturas/create/RegistroClientes"])
  }
}
