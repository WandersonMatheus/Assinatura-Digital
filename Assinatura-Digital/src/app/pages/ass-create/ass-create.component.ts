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
  pdfSelecionado!: File;
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
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.pdfSelecionado = input.files[0];
    }
  }

  gerarLink() {
    const formData = new FormData();
    formData.append('clienteId', this.form.get('clienteId')?.value);
    formData.append('termoId', this.form.get('termoId')?.value);
    formData.append('cenarioId', this.form.get('cenarioId')?.value);
    formData.append('pdf', this.pdfSelecionado);

    this.http.post('/api/assinaturas/criar', formData).subscribe((res: any) => {
      this.linkGerado = res.linkAssinatura;
    });
  }

  ngOnInit(): void {
    this.http.get<Cliente[]>('http://localhost:8080/clientes').subscribe(res => this.clientes = res);
    this.http.get<Termo[]>('http://localhost:8080/termos/lista').subscribe(res=> this.termos = res);
    this.http.get('/api/cenarios').subscribe((res: any) => this.cenarios = res);
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
